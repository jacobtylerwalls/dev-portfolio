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
            <SampleSection title='Back end' samples={backEndSamples} />
            <SampleSection title='Testing, documentation, and performance' samples={otherSamples} />
        </>
    );
}


function SampleSection({ title, samples }: { title: string, samples: Sample[] }) {
    const verbPhrases = [
        'efficiently communicate',
        'unnecessarily rendering',
        'style Leaflet-managed popups',
        'improve',
        'extended',
        'carved out',
        'rewrote',
        'resuscitated',
        'worked out',
    ];

    return (
        <Container my={0} pb={4}>
            <Heading mb={4} size='sm'>{title}</Heading>
            <Accordion allowToggle>
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
                                    for (const magicPhrase of verbPhrases) {
                                        if (p.includes(magicPhrase)) {
                                            return (
                                                <Fragment key={index}>
                                                    <Text fontSize='sm' mt={4}>
                                                        {p.split(magicPhrase)[0]}
                                                        <Link mb={0} href={sample.link} fontWeight='bold' isExternal>
                                                            {magicPhrase + ' '}
                                                            <Icon as={ExternalLinkIcon} />
                                                        </Link>
                                                        {' '}
                                                        {p.split(magicPhrase)[1]}
                                                    </Text>
                                                </Fragment>
                                            );
                                        }
                                    }
                                    return (<Text fontSize='sm' key={index} mt={4}>{p}</Text>);
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
        'link': 'https://github.com/azavea/iow-boundary-tool/pull/144',
        'paragraphs': [
            'In this tool for rural water utility employees '
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
            'Leaflet makes it a breeze to attach interactive popups to features and points on maps. '
            + 'However, it can be difficult to square this with the unidirectional data flow enforced by React.',

            "Here, I used React's createPortal() API to " +
            'style Leaflet-managed popups with a React component library (Chakra UI).',
        ]
    },
];


const backEndSamples: Sample[] = [
    {
        'title': 'Serializers and views with DRF',
        'link': 'https://github.com/azavea/iow-boundary-tool/pull/114',
        'paragraphs': [
            'Here is a pretty standard set of Django REST Framework serializers and views.',

            'I used this opportunity to improve the way test data was prepped for this backend.'
        ],
    },
    {
        'title': "Improving Django's support for geography fields",
        'link': 'https://github.com/django/django/pull/16519',
        'paragraphs': [
            "In this patch, I extended Django's support for PostGIS geometry types.",

            "Previously, you wouldn't be able to enforce uniqueness on geometry fields."
        ],
    },
    {
        'title': "Carving out a special case from a pylint check",
        'link': 'https://github.com/pylint-dev/pylint/pull/5684',
        'paragraphs': [
            'In the 2.13 release of pylint, I adjusted the used-before-assignment '
            + 'message to trigger when a developer depends on an assignment that only '
            + 'happens in an except block (and therefore could raise a NameError after.)',

            'A beta tester brought up a sophisticated pattern guaranteeing that the except '
            + 'block would always be visited, and after communicating on the issue, we settled '
            + 'on a reasonable plan for detecting it. I carved out the case here.'
        ],
    },
];


const otherSamples = [
    {
        'title': "Clarifying the caveats around QuerySet.filter()",
        'link': 'https://github.com/django/django/pull/15236',
        'paragraphs': [
            'The prior examples contrasting `.filter(condition1).filter(condition2)` '
            + 'against `.filter(condition1, condition2)` were a bit forbidding and wordy. ',

            'Here, I rewrote the examples for clarity.',
        ],
    },
    {
        'title': "Making prefetch_related() play nicely with iterator()",
        'link': 'https://github.com/django/django/pull/15334',
        'paragraphs': [
            'Here I resuscitated an abandoned effort in Django to make a database-related '
            + 'optimization compatible with a memory-related one.'
        ],
    },
    {
        'title': "Debugging and regression-testing jagged-edged lines of music",
        'link': 'https://github.com/cuthbertLab/music21j/pull/126',
        'paragraphs': [
            'A subtle issue in a JS library for interactive music notation '
            + 'was causing lines of music to display with jagged widths. '
            + 'I worked out the necessary order '
            + 'of operations and added regression tests with JUnit.'
        ],
    },
];
