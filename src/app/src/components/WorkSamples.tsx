import { Fragment } from 'react';
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    Container,
    Heading,
    Icon,
    Link,
    Text,
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Sample } from '../types';


export default function WorkSamples() {
    return (
        <>
            <SampleSection title='Front end' samples={frontEndSamples} />
            <SampleSection title='Back end' samples={frontEndSamples} />
            <SampleSection title='Testing, tooling, and performance' samples={frontEndSamples} />
        </>
    );
}


function SampleSection({ title, samples }: { title: string, samples: Sample[] }) {
    const magicPhrases = ['Here, ', 'In this example '];

    return (
        <Container my={0} pb={4}>
            <Heading mb={4} size='sm'>{title}</Heading>
            <Accordion allowMultiple my={2}>
                {samples.map((sample, index) => {
                    return (
                        <AccordionItem key={index}>
                            <h2>
                                <AccordionButton _expanded={{ bg: 'teal.100', fontWeight: 'bold', rounded: 'md' }}>
                                    <Box as='span' flex='1' textAlign='left'>
                                        {sample.title}
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>
                                {sample.paragraphs.map((p, index) => {
                                    for (const magicPhrase of magicPhrases) {
                                        if (p.includes(magicPhrase)) {
                                            return (
                                                <Fragment key={index}>
                                                    <Text mt={4}>
                                                        {p.split(magicPhrase)[0]}
                                                        <Link mb={0} href={sample.link}>
                                                            {magicPhrase}<Icon as={ExternalLinkIcon} /> {' '}
                                                        </Link>
                                                        {p.split(magicPhrase)[1]}
                                                    </Text>
                                                </Fragment>
                                            );
                                        }
                                    }
                                    return (<Text key={index} mt={4}>{p}</Text>);
                                })}
                            </AccordionPanel>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </Container>
    );
}


const frontEndSamples: Sample[] = [
    {
        'title': 'Using RTK Query to cache and debounce API calls',
        'link': 'https://github.com/azavea/iow-boundary-sync/pull/144',
        'paragraphs': [
            'In this example from the Boundary Sync app, a web tool for rural water utility employees '
            + 'to digitize and hand-tailor their system boundaries, I used RTK Query--'
            + 'a first-party tool from the makers of Redux--to efficiently communicate with the database. ',

            '(Debouncing is especially important for a click-intensive user experience like manipulating '
            + 'the edges of a reference image.)'
        ]
    },
    {
        'title': 'Fixing a sluggish UI with useCallback()',
        'link': 'https://github.com/azavea/green-equity-demo/pull/97',
        'paragraphs': [
            "Here, I used React's useCallback() hook to prevent an interactive element "
            + 'from unnecessarily rendering tens of thousands of times.',
        ]
    },
    {
        'title': 'Syncing React with Leaflet',
        'link': 'https://github.com/azavea/green-equity-demo/pull/36',
        'paragraphs': [
            'Leaflet makes it simple to attach interactive popups to features and points on maps. '
            + 'However, it can be difficult to square this with the unidirectional data flow enforced by React.',

            "Here, I used React's createPortal() API to " +
            'style Leaflet-managed popups with a React component library (Chakra UI).',
        ]
    },
]
