import { configureStore, combineReducers } from '@reduxjs/toolkit'
import RecentActivityReducer from './reducers/recent_activity/RecentActivityReducer'

export const store = configureStore({
  reducer: combineReducers({
        recentActivity: RecentActivityReducer
    })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch