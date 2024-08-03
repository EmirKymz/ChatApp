import { useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, Text } from 'react-native';
import { Channel as ChannelType } from 'stream-chat';
import { useEffect, useState } from 'react';
import { Channel, MessageInput, MessageList, useChatContext } from 'stream-chat-expo';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ChannelScreen() {
    const [channel, setChannel] = useState<ChannelType | null>(null);
    const { cid } = useLocalSearchParams<{ cid: string }>();

    const { client } = useChatContext();

    useEffect(() => {
        const fetchChannel = async () => {
            const channels = await client.queryChannels({ cid });
            //console.log(channels);
            setChannel(channels[0]);
        }
        fetchChannel();
    }, [cid]);

    if (!channel) {
        return <ActivityIndicator/>;
    }

    return (
        <Channel channel={channel}>
            <MessageList />
            <SafeAreaView edges={['bottom']}>
                <MessageInput />
            </SafeAreaView>
            
        </Channel>
    );
}