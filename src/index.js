import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./app/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PostList } from "./features/posts/PostList";
import { NotFound } from "./components/NotFound";
import { Starred } from "./features/posts/Starred";
import { saveStateToLocalStorage } from "./utilities/useLocalStorage";

store.subscribe(() => {
  saveStateToLocalStorage({
    starred: store.getState().posts.starred,
    isLight: store.getState().theme.isLight,
  });
});

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<PostList />} />
            <Route path="latest" element={<PostList />}>
              <Route path=":page" element={<PostList />} />
            </Route>
            <Route path="starred" element={<Starred />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
