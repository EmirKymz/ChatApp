import { Slot, Stack } from 'expo-router';
import { useEffect } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat, OverlayProvider } from 'stream-chat-expo';

const client = StreamChat.getInstance('');

export default function homeLayout() {

    useEffect(() => {
        const connect = async () => {
            await client.connectUser({
                id: 'user-id1',
                name: 'user-name1',
            },
            client.devToken('user-id1')
            );

            /* const channel = client.channel('messaging', 'channel-id1', {
                name: 'channel-name1',
            });
            await channel.watch(); */
        };
        connect();
    });

    return(
        <OverlayProvider>
            <Chat client={client}> 
                <Stack>
                    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                </Stack>
            </Chat>
        </OverlayProvider>
    );
}
