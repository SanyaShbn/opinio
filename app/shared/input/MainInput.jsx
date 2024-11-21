import { Box, Input } from "native-base";

function MainInput({text, size="xl"}) {
    return ( 
    <Box alignItems="center">
        <Input size={size} mx="3"  placeholder={text} w="100%" />
    </Box> );
}

export default MainInput;