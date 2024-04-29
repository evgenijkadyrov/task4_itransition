export const transformUsers = (users) => {
    return users.map((user) => ({...user, key: user.email}));
};
