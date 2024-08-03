import { PropsWithChildren, useEffect, useState } from "react";
import { ActivityIndicator } from 'react-native';
import { StreamChat } from 'stream-chat';
import { Chat, OverlayProvider } from 'stream-chat-expo';

const client = StreamChat.getInstance(process.env.EXPO_PUBLIC_STREAM_API_KEY);


export default function ChatProvider({children}: PropsWithChildren) {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const connect = async () => {
            await client.connectUser({
                id: 'user-id1',
                name: 'user-name1',
            },
            client.devToken('user-id1')
            );
            setIsReady(true);

            /* const channel = client.channel('messaging', 'channel-id1', {
                name: 'channel-name1',
            });
            await channel.watch(); */
        };
        connect();

        return () => {
            client.disconnectUser();
            setIsReady(false);
        }
    }, []);

    if (!isReady) {
        return <ActivityIndicator />;
    }

    return (
        <OverlayProvider>
            <Chat client={client}>{children}</Chat>
        </OverlayProvider>
    );
}