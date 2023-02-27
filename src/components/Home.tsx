import { Box, Text, Image, Divider, Center } from '@chakra-ui/react';
import profileImage from './images/profile-pic.jpg'

export default function Home() {
    return (
        <>
            <Box id="Home" pt={'60px'}>
                <Box
                    mx={{ base: '6', sm: '12', md: '24', lg: '36', xl: '48', '2xl': '72' }}
                    my={{ base: '24', lg: '35' }}
                    display={['block', 'block', 'flex', 'flex']}
                    alignItems="center"

                >
                    <Box w={{ base: "100%", md: "100%", lg: "75%" }} mb={['10', '10', '0', '0']} >
                        <Center w={'100%'} >
                            <Image src={profileImage} alt="profile-pic" boxSize={['245px', '280px', '300px', '310px']} borderRadius='full' boxShadow={'rgba(149, 157, 165, 0.2) 0px 8px 24px'} />
                        </Center>
                    </Box>
                    <Box w={{ base: "100%", lg: "85%" }}>
                        <Text fontSize={'2xl'} fontWeight='thin' textAlign='center' >Hello! I'm</Text>
                        <Text fontWeight={'bold'} fontSize={['5xl', '6xl', '7xl', '8xl']} textAlign='center' >Barry Allen Magno</Text>
                        <Text fontStyle={'italic'} fontWeight='thin' fontSize={'2xl'} textAlign='center' >Web Developer</Text>
                    </Box>
                </Box>
                <Center>
                    <Divider
                        width={'50%'}
                        display='flex'
                        border='1px solid'
                        mt={['-100px', '-50px', '0', '0',]}
                    />
                </Center>
                <Box mx={['10%', '15%', '15%', '15%',]} my={'45'} pl={['0', '0', '30px', '30px']} pr={['0', '0', '30px', '30px']} w={["80%", "70%", "70%", "70%",]}>
                    <Text fontWeight={'light'} fontSize={['2xl', '2xl', '3xl', '3xl']} textAlign='center' mt={['-50px', '0', '0', '0',]} mb='100px' >
                        As an aspiring web developer, I am willing to learn and adapt to new technologies. I am self-motivated and a team player seeking a position as a web developer where I can apply my knowledge to contribute and meet client needs.
                    </Text>
                </Box>
            </Box>
        </>
    )
}