/**
 * importAll: Takes in a context and imports all files of type
 * and saves for export
 * @param {context} resolve: context to import all the files of type from
 * @return {array} files: imported array of files of type
 */
const importAll = resolve => {
  var files = {}
  resolve.keys().forEach(key => {
    files[key] = resolve(key)
  })
  return files
}
const mdFiles = importAll(require.context('~/assets/projects', true, /\.md$/))

export const state = () => ({
  projects: mdFiles
})
