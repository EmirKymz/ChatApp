import { Text } from 'react-native';
import { ChannelList } from 'stream-chat-expo';
import { Link, Stack, router } from 'expo-router';
import { useAuth } from '../../../providers/AuthProvider';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function MainTabScreen() {

    const { user } = useAuth();

    return ( 
        <>
            <Stack.Screen options={{
                headerRight: () => (
                    <Link href={`/(home)/users`} asChild>
                    <AntDesign name="pluscircle" size={24} color="gray" style={{marginHorizontal: 16}} />
                    </Link>
                    ),
                }}
            />
            <ChannelList 
                filters={{members:{ $in: [user.id]}}}
                onSelect={(channel) => router.push(`/channel/${channel.cid}`)}
            />
        </>
    );
}