import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Container,
    Heading,
} from '@chakra-ui/react'


export default function WorkSamples() {
    return (
        <>
            <SampleSection title='Front end' samples={frontEndSamples} />
            <SampleSection title='Back end' samples={backEndSamples} />
            <SampleSection title='Testing' samples={testingSamples} />
            <SampleSection title='Performance' samples={performanceSamples} />
        </>
    );
}


function SampleSection({ title, samples }: { title: string, samples: string[][] }) {
    return (
        <Container my={0} pb={4}>
            <Heading mb={4} size='sm'>{title}</Heading>
            <Accordion allowMultiple my={2}>
                {samples.map(([headline, text], index) => {
                    return (
                        <AccordionItem key={index}>
                            <h2>
                                <AccordionButton>
                                    <Box as='span' flex='1' textAlign='left'>
                                        {headline}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                {text}
                            </AccordionPanel>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </Container>
    );
}


const frontEndSamples = [
    [
        'React',
        'This one time with react...',
    ],
];

const backEndSamples = [
    [
        'Django',
        'This one time with Django...',
    ],
];

const testingSamples = [
    [
        'Bugs!',
        'This killer bug report...',
    ],
];


const performanceSamples = [
    [
        'Big win here',
        'Read on...',
    ],
];
