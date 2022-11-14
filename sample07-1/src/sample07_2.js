import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
  
class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            text: "",
        };
  
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        // ページが表示されたらサーバから書き込み一覧を取得する
        this.getPosts();
    }

    getPosts() {
        axios.get("http://localhost:3000/")
        .then(res => {
            this.setState({posts: res.data});
        })
        .catch(err => {
            console.log(err);
        });
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const data = {
            text: this.state.text
        }
        axios.post("http://localhost:3000/", data)
        .then(() => {
            this.setState({text: ""});
            this.getPosts();
        })
        .catch(err => {
          console.log(err);
        });
    }
  
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="text"
                        value={this.state.text}
                        onChange={this.handleChange} />
                    <input type="submit" value="追加" />
                </form>
                <ul>
                    {this.state.posts.map(
                        (post, i) => 
                            <li key={i}>
                                <span className="datetime">
                                    {post.datetime}
                                </span>
                                {post.text}
                            </li>
                    )}
                </ul>
            </div>
        );
    }
}
  
ReactDOM.render(
    <Board />,
    document.getElementById("root")
);