export class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            error: ""
        }
    }

    //In this lifecycle method we create the get request.to make a get request we invoke it on the axios library object and the we pass it the endpoint where we want to make the request to.But how do we access the data that is returned? => axios is a promise based library so we can use "then" and "catch" blocks.then() accepts an arrow function as an argument which gives us access to the response object.Then we use catch the same way in order to display an error if it occurs.After the array of objects has been returned we have to assign it to the state property and then render it.
    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                console.log(response)
                this.setState({ posts: response.data });
            })
            .catch(error => {
                console.log(error);
                this.setState({ errorMsg: "Error retrieving data" })
            })
    }
    //After having the state assigned with the array of objects we have to destructure the state property and display the list of posts using the map method.
    render() {
        const { posts, errorMsg } = this.state;
        return (
            <div>
                List of Posts
                {
                    posts.length ?
                        posts.map(posts => <div key={posts.id}>{posts.title}</div>) :
                        null

                }
                {
                    errorMsg ? <div>{errorMsg}</div> : null
                }
            </div>
        )
    }
}

export default PostList
