export const Sorting = (users, params) => {
  let filtered = users.filter(function (v) {
    return v.name.includes(params.search);
  });
  if (params.role === "all") {
    return filtered;
  } else
    return filtered.filter(function (v) {
      return v.role === params.role;
    });
};
