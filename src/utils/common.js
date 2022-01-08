export const importPage = (page) => {
  return () => import('../pages/' + page)
}