import { useAuth } from '@/src/providers/AuthProvider';
import ChatProvider from '@/src/providers/ChatProvider';
import { Redirect, Stack } from 'expo-router';

export default function homeLayout() {

    const { user } = useAuth();
    if (!user) {
        return <Redirect href="/(auth)/login"/>;
    }

    return(
        <ChatProvider>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </ChatProvider>
    );
}
