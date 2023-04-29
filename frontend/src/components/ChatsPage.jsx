import { PrettyChatWindow } from 'react-chat-engine-pretty';

const ChatsPage = ({ username }) => {
    return (
        <PrettyChatWindow
            projectId="85c0c2cb-4328-4871-b90a-93a6802e6584
"
            username={username.username}
            secret={username.secret}
            style={{ height: '100vh' }}
        />
    );
};
export default ChatsPage;
