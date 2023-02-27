import { Box, Text, Divider, Center, Image, Link } from "@chakra-ui/react";
import personalWebsite from './images/personalWebsite.png';
import basicLogicTest from './images/basic-logic-test.png';
import techno from './images/techno.png';

export default function Projects() {
    return (
        <>
            <Box textAlign={'center'} mt="50px" pb={'70px'} id='Projects'>
                <Box pt="10px">
                    <Text fontWeight={'semibold'} fontSize={['5xl', '5xl', '5xl', '6xl']} >Projects</Text>
                    <Center>
                        <Divider
                            width={'70px'}
                            display='flex'
                            border='1px solid'
                            mb={'45px'}
                        />
                    </Center>
                    <Box display={{ base: 'block', lg: 'flex' }} mb={70} mt={'50px'} >
                        <Box m={5} display="inline-block" w={{ base: "75%", md: "100%", lg: "75%" }} >
                            <Center>
                                <Image boxShadow={'0 3px 10px rgb(0 0 0 / 0.2)'} w='500px' src={personalWebsite} />
                            </Center>
                        </Box>
                        <Box m={5} display="inline-block" w={{ base: "85%", lg: "85%" }} h="auto" p="12px" mt={'-3'} >
                            <Text fontSize={['2xl', '2xl', '2xl', '2xl']} fontWeight={'normal'} textAlign={{ base: 'center', lg: 'left' }} mt={3}>Portfolio/Personal Website</Text>
                            <Text fontSize={['normal', '2xl', '2xl', '2xl']} fontWeight={'light'} textAlign={{ base: 'center', lg: 'left' }} mt={3}>This is my portfolio/personal website that I built using Figma for prototyping, layout, and design, as well as ReactJS, TypeScript, and Chakra UI. I created this project to apply my learnings in building responsive websites. You can try it out by resizing your browser. </Text>
                        </Box>
                    </Box>
                    <Box display={{ base: 'block', lg: 'flex' }} mb={70} >
                        <Box m={5} display="inline-block" w={{ base: "75%", md: "100%", lg: "75%" }} >
                            <Center>
                                <Link href="https://barryallenmagno.github.io/basic-logic-test/alert.html" target={'_blank'} >
                                    <Image boxShadow={'0 3px 10px rgb(0 0 0 / 0.2)'} w='500px' src={basicLogicTest} />
                                </Link>
                            </Center>
                        </Box>
                        <Box m={5} display="inline-block" w={{ base: "85%", lg: "85%" }} h="auto" p="12px" mt={'-3'} >
                            <Link href="https://barryallenmagno.github.io/basic-logic-test/alert.html" target={'_blank'} >
                                <Text fontSize={['2xl', '2xl', '2xl', '2xl']} fontWeight={'normal'} textAlign={{ base: 'center', lg: 'left' }} mt={3}>Basic Logic Test</Text>
                            </Link>
                            <Text fontSize={['normal', '2xl', '2xl', '2xl']} fontWeight={'light'} textAlign={{ base: 'center', lg: 'left' }} mt={3}>I built this web application using JavaScript, Bootstrap, and jQuery to apply my basic knowledge and to share it with others to test their basic logic. </Text>
                        </Box>
                    </Box>
                    <Box display={{ base: 'block', lg: 'flex' }} mb={70} >
                        <Box m={5} display="inline-block" w={{ base: "75%", md: "100%", lg: "75%" }} >
                            <Center>
                                <Link href="https://barryallenmagno.github.io/techno/product.html" target={'_blank'} >
                                    <Image boxShadow={'0 3px 10px rgb(0 0 0 / 0.2)'} w='500px' src={techno} />
                                </Link>
                            </Center>
                        </Box>
                        <Box m={5} display="inline-block" w={{ base: "85%", lg: "85%" }} h="auto" p="12px" mt={'-3'} >
                            <Link href="https://barryallenmagno.github.io/techno/product.html" target={'_blank'} >
                                <Text fontSize={['2xl', '2xl', '2xl', '2xl']} fontWeight={'normal'} textAlign={{ base: 'center', lg: 'left' }} mt={3}>Product Website</Text>
                            </Link>
                            <Text fontSize={['normal', '2xl', '2xl', '2xl']} fontWeight={'light'} textAlign={{ base: 'center', lg: 'left' }} mt={3}>This site was one of our school activities. I also built it to practice and test my ability to develop websites as a "beginner". </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}