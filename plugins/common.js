// 共通関数
// インポートをしないで使うため、共通関数をinjectする。
// 使う時、共通関数の前に$を付ける。例：this.$outputLog('hello!')
const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("ja", options);
}

export default ({}, inject) => {
  // inject('outputLog', (message) => {
  //   console.log(`LOG: ${message}`)
  // }),
  inject('formatDate', formatDate);
}
