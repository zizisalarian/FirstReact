import { useState } from "react";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Article from "./Components/Article/Article";

import "./App.css";

function App() {
  const [articles, setArticles] = useState([
    { id: 1, title: "آموزش react", author: "zizi", price: 12_000 },
    { id: 2, title: "", author: "ensi", price: 0 },
    { id: 3, title: "", author: "mahi", price: 12_000 },
    { id: 4, title: "تست defef ", author: "arash", price: 18_000 },
    { id: 5, title: "بوتسترپ ", author: "zohren", price: 0 },
    { id: 6, title: "تست داده است  ", author: "mehrdad", price: 10_000 },
  ]);

  const removeArticle = (articleID) => {
    const newArticles = articles.filter((article) => article.id !== articleID);
    setArticles(newArticles);
  };
  return (
    <div>
      <Header />
      <main>
        <section
          id="hero-section"
          className="container flex items-center justify-between">
          <div id="headline">
            <h1 id="title">سبزبلاگ؛ مرجع آموزش و پروژه‌های برنامه‌نویسی</h1>
            <p id="caption">
              سبزبلاگ فضایی برای یادگیری برنامه‌نویسی و به‌اشتراک‌گذاری دانش
              است. اینجا مقالات آموزشی، نکات کاربردی و پروژه‌های رزومه‌ای
              برنامه‌نویسی با زبانی ساده و حرفه‌ای ارائه می‌شه. هدف ما کمک به
              شماست تا مهارت‌هاتون رو تقویت کنید و رزومه‌ای قوی با پروژه‌های
              جذاب بسازید!
            </p>
            <div id="hero-btns" className="gap-2">
              <button className="btn primary-btn">خواندن مقالات</button>
              <button className="btn secondary-btn">تهیه اشتراک</button>
            </div>
          </div>
          <div id="image-container">
            <img src="./public/images/hero-illustrator.png" />
          </div>
        </section>
        <section id="articles-section">
          <div id="articles-header" className="container flex justify-between">
            <h2 id="section-title">مقالات اخیر</h2>
            <a href="#" className="read-more">
              {" "}
              بیشتر بخوانید{" "}
            </a>
          </div>

          <div id="items" className="container">
            {articles.map((article) => (
              <Article {...article} removedata={removeArticle} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
