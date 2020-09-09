function sortUsers(input) {
  return input.sort((a, b) => {
    if (a.name < b.name) {
      return -1
    } else {
      return 1
    }
  })
}

export { sortUsers }
