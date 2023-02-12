import profileReducer, {addPostActionCreator} from "./profile-reducer";


const postsInitialState = {
    postsData: {
        posts: [
            {id: 1, post: "Hey, why nobody loves me?"},
            {id: 2, post: "Be who you were created to be, and you will set the world on fire."},
            {id: 3, post: "I am learning react + redux + MUI"}
        ]
    }
};


test("Adding new post", () => {
    const action = addPostActionCreator('new test post');
    const result = profileReducer(postsInitialState, action);

    expect(result.postsData.posts.length).toBe(4);
});

test("Checking post message", () => {
    const action = addPostActionCreator('new test post');
    const result = profileReducer(postsInitialState, action);

    expect(result.postsData.posts[3].post).toBe('new test post');
});