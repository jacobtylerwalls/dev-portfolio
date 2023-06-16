import { Container, Flex, HStack, Link, Spacer, Text, VStack } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import WorkSamples from './components/WorkSamples';

function App() {
    return (
        <Flex mx={0} minHeight='100%'>
            <Sidebar />
            <Container mx={0} minWidth='67%'>
                <VStack m={4} align='stretch' spacing={4} maxWidth='63%'>
                    <HStack spacing={4}>
                        <Text size='sm'>👋</Text>
                        <Text size='sm'>I&apos;m a developer who&apos;s passionate about testing tools and designing for change.</Text>
                    </HStack>
                    <HStack spacing={4}>
                        <Text size='sm'>🔍</Text>
                        <Text size='sm'>Explore some recent open-source work I completed at{' '}
                            <Link textColor='teal.700' href='https://www.azavea.com'>Azavea</Link>
                            {' '}and{' '}
                            <Link textColor='teal.700' href='https://www.element84.com'>Element 84</Link>
                            , plus some well-known community projects.</Text>
                    </HStack>
                    <Spacer />
                    <WorkSamples />
                    <Spacer />
                    <Text>Thanks for visiting. You can reach me on {' '}
                        <Link textColor='teal.700' href='https://www.linkedin.com/in/jacob-walls-96979388/'>
                            LinkedIn
                        </Link>
                        .
                    </Text>
                </VStack>
            </Container>
        </Flex>
    );
}

export default App;
