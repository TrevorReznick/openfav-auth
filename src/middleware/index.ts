import { defineMiddleware } from 'astro:middleware'
import { supabase } from '~/providers/supabase'
import { id, email, user_name } from '../store'

const protectedRoutes = ['/test/test-reusable']
const redirectRoutes = ['/login', '/register']

export const onRequest = defineMiddleware(
  async ({ locals, url, cookies, redirect }, next) => {
    if (protectedRoutes.includes(url.pathname)) {
      const accessToken = cookies.get('sb-access-token')
      const refreshToken = cookies.get('sb-refresh-token')

      if (!accessToken || !refreshToken) {
        return redirect('/login')
      }

      const { data, error } = await supabase.auth.setSession({
        refresh_token: refreshToken.value,
        access_token: accessToken.value,
      })

      if (error) {
        cookies.delete('sb-access-token', {
          path: '/',
        })
        cookies.delete('sb-refresh-token', {
          path: '/',
        })
        return redirect('/login')
      }
      console.log('auth data', data)

      /* @@ set store @@ */

      const email_ = data.user?.email ?? ''
      email.set(email_)
      id.set(data.user?.id ?? '')
      const [extractUsername] = email_.split('@')
      user_name.set(extractUsername ?? '')
      
      cookies.set('sb-access-token', data?.session?.access_token!, {
        sameSite: 'strict',
        path: '/',
        secure: true,
      })
      cookies.set('sb-refresh-token', data?.session?.refresh_token!, {
        sameSite: 'strict',
        path: '/',
        secure: true,
      })
    }

    if (redirectRoutes.includes(url.pathname) || redirectRoutes.includes(url.pathname.replace(/\/$/, ''))) {
      const accessToken = cookies.get('sb-access-token')
      const refreshToken = cookies.get('sb-refresh-token')

      if (accessToken && refreshToken) {
        return redirect('/test/test-reusable')
      }
    }
    return next()
  },
)
