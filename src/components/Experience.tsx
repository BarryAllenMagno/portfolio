import { Box, Text, Center, Divider, useColorModeValue } from "@chakra-ui/react";

export default function Experience() {
    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} id='Experience'>
                <Box textAlign={'center'} pt="5px" pb={'70px'} mt={'50px'}>
                    <Text mt={'50px'} fontWeight={'semibold'} fontSize={['5xl', '5xl', '5xl', '6xl']} >Experience</Text>
                    <Center>
                        <Divider
                            width={'70px'}
                            display='flex'
                            border='1px solid'
                            mb={'45px'}
                        />
                    </Center>
                    <Box textAlign="center" mt="50px">

                        <Box mx={['10%', '15%', '15%', '15%',]} my={'45'} p={'30px'} w={["80%", "70%", "70%", "70%",]} borderRadius={'10px'} boxShadow='0 3px 10px rgb(0 0 0 / 0.2)' >
                            <Text fontWeight={'semibold'} fontSize={['normal', 'normal', '2xl', '2xl']} >Intern Frontend Developer - Deal and Do Software Development Services</Text>
                            <Text fontSize={['normal', 'normal', '2xl', '2xl']} fontWeight={'thin'} m={3} >Feb 2023 - Mar 2023</Text>
                            <Text fontSize={['normal', 'normal', '2xl', '2xl']} fontWeight={'thin'}>Responsible for building website design</Text>
                        </Box>

                        <Box mx={['10%', '15%', '15%', '15%',]} my={'45'} p={'30px'} w={["80%", "70%", "70%", "70%",]} borderRadius={'10px'} boxShadow='0 3px 10px rgb(0 0 0 / 0.2)' >
                            <Text fontWeight={'semibold'} fontSize={['normal', 'normal', '2xl', '2xl']}>Senior Business Process Associate - ADEC Innovation</Text>
                            <Text fontSize={['normal', 'normal', '2xl', '2xl']} fontWeight={'thin'} m={3} >Sept 2015 - May 2018 </Text>
                            <Text fontSize={['normal', 'normal', '2xl', '2xl']} fontWeight={'thin'}>Responsible for helping to identify inefficiencies in operations and developing solutions.</Text>
                        </Box>

                    </Box>
                </Box>
            </Box>

        </>
    )
}