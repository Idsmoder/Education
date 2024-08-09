import { Stack} from "expo-router"
const HomeLayout = () =>{
    
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    headerShown: false,
                    
                }}
            />
            <Stack.Screen
                name="[id]"
                options={{
                    title: 'test',
                    headerStyle: {
                        backgroundColor: "#fff",
                        
                    },
                    headerTintColor: "black",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                    headerBackTitle: "Back",
                    headerBackTitleVisible: false,
                    
                    
                }}
            />
        </Stack>
    )
}
export default HomeLayout