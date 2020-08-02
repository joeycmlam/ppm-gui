export {}

type UserState = {
    username: string | null
};

const initialState: UserState = { username: null };


const login = (username: string) => (
    {
        payload: username
    }
);

const logout = () => (
    {

    }
);

