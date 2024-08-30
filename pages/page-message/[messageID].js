import { useRouter } from 'next/router';

const MessageDetailPage = () => {
    const router = useRouter();
    const { messageID } = router.query;

    return (
        <div>
            <h5>Welcome to page: {messageID}</h5>
        </div>
    );
};

export default MessageDetailPage;
