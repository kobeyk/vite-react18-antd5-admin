import { fetchGet } from '@/core/api/fetchGet';
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserModel {
    id: number;
    userName: string;
  }

export interface UserState{
    users: UserModel[];
}

const userApi = {
    queryUser:"user/query"
}

/** 
 * createAsyncThunk中间件，用于执行异步操作 
 * 参数1：类型前缀 （可以当前slice的命名空间带上异步操作的名称）
 * 参数2：传入一个函数, 该函数可以执行异步操作, 甚至可以直接传入一个异步函数
 * */
export const queryUser = createAsyncThunk(
    "user/query",
    async()=>{
        /** 将查询结果返回出去 */
        return await fetchGet(userApi.queryUser);
    }
)

/** 初始化状态state */
const initialState:UserState={
    users: [
        {
          id: 1001,
          userName: "appleyk",
        },
      ],
}

/**
 * 创建数据分片，一个分片包含了：
 * name：命名空间
 * initialState：初始化数据
 * reducers：action和reducer的结合体，表示同步action触发的数据归并操作
 */
const userService = createSlice({
    name:"user",
    initialState,
    /** 同步reducer（相较于之前的react-redux，这里是把reducer和action整合到了一起） */
    reducers:{
        /**同步reducer */
        addUser(state,action:PayloadAction<UserModel>){
            state.users.push(action.payload);
        },
    },
    /** 监听异步action执行结果 */
    extraReducers: (builder)=>{
        /**
         * 参数1：异步请求promise的状态（pending、fulfilled、rejected）
         * 参数2：回调函数，相当于同步的reducer
         */
        builder.addCase(queryUser.fulfilled,(state:any,action)=>{
            state.users = action.payload
        })
    }
})

export const{addUser} = userService.actions;
export default userService.reducer;