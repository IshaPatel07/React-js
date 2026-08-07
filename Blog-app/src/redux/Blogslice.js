import { createSlice } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { axios } from "axios"

const fetchBlogs = createAsyncThunk("fetch/blogs", async () => {
    try {
        const res = await axios.get("http://localhost:3000/blogs")
        return res.data;
    } catch (error) {
        throw error
    }
})


const blogsAuth = createSlice({
    name: "blogs",
    initialState: {
        blogs: [],
        error: null,
        loader: false
    },
    reducers: {},
    extraReducers: (builder) => {

    }
})
export default blogsAuth.reducer