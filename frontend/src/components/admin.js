import React from "react";
import "../App.css";
//create the article table
const ArticleCard = (props) =>{
  const article = props.article;

  return(
    //print the article result in a table form
    <table>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Year</th>
        <th>Source</th>
        <th>Url</th>
      </tr>
      <tr>
        <td>{article.title}</td>
        <td>{article.author}</td>
        <td>{article.year}</td>
        <td>{article.source}</td>
        <td>{article.url}</td>
      </tr>
    </table>
  )
}

export default ArticleCard;