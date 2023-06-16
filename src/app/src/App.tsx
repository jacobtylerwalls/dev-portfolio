import { Box, Flex } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <Flex pl={0} maxWidth='650px' height='100%'>
            <Sidebar />
            <Box height='100vh'>
                <p>Jacob Walls | full-stack developer</p>
            </Box>
        </Flex>
    );
}

export default App;
