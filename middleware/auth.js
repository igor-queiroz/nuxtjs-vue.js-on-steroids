export default function (context) {
  console.log('[Middleware] auth')
  if (!context.store.getters.isAuthenticated) {
    context.redirect('/admin/auth')
  }
}
