import { createContext, useState } from "react"
import ShowPsots from "../components/allPosts/ShowPosts"
import CreatePost from "../components/createapost/CreatePost"
import Friends from "../components/friends/Friends"
import HeaderComponent from "../components/header/Header"
import Storys from "../components/storys/Storys"

export const PostData = createContext({ dataPost: null, setDataPost: null });

const HomePageView = () => {
    const [dataPost, setDataPost] = useState([]);
    return (<>
        <HeaderComponent />
        <div style={{
            background: '#A5A2991A',
        }}>
            <div className='rootContuner'>
                <Storys />
                <Friends />
                <PostData.Provider value={{ dataPost, setDataPost }}>
                <CreatePost />
                <ShowPsots  />
                </PostData.Provider>
            </div>
        </div>
    </>
    )
}

export default HomePageView;