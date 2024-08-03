import { Tabs } from 'expo-router';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function RootLayout(){
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Chats',
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome5 name="comment" size={size} color={color} />
                        ),
                    }}
                />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ size, color }) => (
                        <FontAwesome5 name="user-alt" size={size} color={color} />
                        ),
                    }}
                />
        </Tabs>
    );
}