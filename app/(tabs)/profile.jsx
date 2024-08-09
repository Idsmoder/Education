import { View, Text } from "react-native";

export default function Profile() {
  useEffect(() => {
    api.get('select/category')
        .then((response) => {
            setCategorys(response.data);
        })
        .catch((error) => {
            console.error(error);
        })
        console.log('Profile');
    }, []);

  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
}