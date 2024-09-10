/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import './style.css';
import { Tabs } from 'antd';
import { EditOutlined, BorderBottomOutlined, FolderViewOutlined } from '@ant-design/icons';
import PostForm from './postForm/PostForm';
import UploadFiles from './uploadFiles/UploadFiles';
import { theme } from 'antd';
import { createContext } from 'react';

const CreatePost = () => {
    return (<div style={{
        background: 'white',
        borderRadius: '15px',
        padding: '20px',
    }}>

        <Tabs
            defaultActiveKey="1"
            // eslint-disable-next-line array-callback-return
            items={[EditOutlined, BorderBottomOutlined, FolderViewOutlined].map((Icon, i) => {
                const id = String(i + 1);
                if (id === String(1)) {
                    return {
                        label: (
                            <span className='createPostTabs' >
                                <Icon />
                                Post
                            </span>
                        ),
                        key: id,
                        children: <PostForm />,
                    };
                }
                if (id === String(3)) {
                    return {
                        label: (
                            <span className='createPostTabs'>
                                <Icon />
                                Photo/Video
                            </span>
                        ),
                        key: id,
                        children: <UploadFiles />,
                    };
                }
            })}
        />
    </div>);
};

export default CreatePost;
