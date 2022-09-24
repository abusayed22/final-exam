import apiSlice from "../api/apiSlice";
import { userLogged } from "./authSlice";


const authAPI = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: "/login",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg, {dispatch, queryFulfilled}) {
                try {
                    const result = await queryFulfilled;

                    console.log(localStorage.setItem("auth", JSON.stringify({
                        accessToken: result.data.accessToken,
                        user: result.data.user
                    })))
                    localStorage.setItem("auth", JSON.stringify({
                        accessToken: result.data.accessToken,
                        user: result.data.user
                    }));

                    dispatch(userLogged({
                        accessToken: result.data.accessToken,
                        user: result.data.user
                    }))
                } catch (error) {}
            },
            
        }),
    })
});
export const {useLoginMutation} = authAPI;
export default authAPI