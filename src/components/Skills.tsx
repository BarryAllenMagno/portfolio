import { Box, Text, Image, Divider, Center, useColorModeValue } from '@chakra-ui/react';
import react from './images/react.png';
import chakra from './images/chakra.png';
import git from './images/git.png';
import js from './images/js.png';
import mongodb from './images/mongodb.png';
import node from './images/node.png';
import React from "react";

export default function Skills() {

    return (
        <>
            <Box id='Skills' bg={useColorModeValue('gray.100', 'gray.900')}>
                <Box

                    mt={'50px'}
                    w='100%'
                    pb={'150px'}
                >
                    <Center>
                        <Text mt={'50px'} fontWeight={'semibold'} fontSize={['5xl', '5xl', '5xl', '6xl']} textAlign='center' >Skills</Text>
                    </Center>
                    <Center>
                        <Divider
                            width={'70px'}
                            display='flex'
                            border='1px solid'
                            mb={'45px'}

                        />
                    </Center>
                        <Box textAlign="center" mt="50px" >
                            <Box m={5} display="inline-block" w="auto" h="auto" p='24px 40px' boxShadow={'rgba(149, 157, 165, 0.2) 0px 8px 24px'} borderRadius='2xl' >
                                <Image boxSize={['80px', '80px', '80px', '80px']} src={react}  />
                                <Text textAlign={'center'} mt='1' >ReactJs</Text>
                            </Box>

                            <Box m={5} display="inline-block" w="auto" h="auto" p='24px 40px' boxShadow={'rgba(149, 157, 165, 0.2) 0px 8px 24px'} borderRadius='2xl' >
                                <Image boxSize={['80px', '80px', '80px', '80px']} borderRadius='2xl' src={chakra}  />
                                <Text textAlign={'center'} mt='1' >Chakra UI</Text>
                            </Box>

                            <Box m={5} display="inline-block" w="auto" h="auto" p='24px 40px' boxShadow={'rgba(149, 157, 165, 0.2) 0px 8px 24px'} borderRadius='2xl' >
                                <Image boxSize={['80px', '80px', '80px', '80px']} src={js}  />
                                <Text textAlign={'center'} mt='1' >JavaScript</Text>
                            </Box>

                            <Box m={5} display="inline-block" w="auto" h="auto" p='24px 40px' boxShadow={'rgba(149, 157, 165, 0.2) 0px 8px 24px'} borderRadius='2xl' >
                                <Image boxSize={['80px', '80px', '80px', '80px']} src={git}  />
                                <Text textAlign={'center'} mt='1' >Git</Text>
                            </Box>

                            <Box m={5} display="inline-block" w="auto" h="auto" p='24px 40px' boxShadow={'rgba(149, 157, 165, 0.2) 0px 8px 24px'} borderRadius='2xl' >
                                <Image boxSize={['80px', '80px', '80px', '80px']} src={mongodb}  />
                                <Text textAlign={'center'} mt='1' >Mongodb</Text>
                            </Box>

                            <Box m={5} display="inline-block" w="auto" h="auto" p='24px 40px' boxShadow={'rgba(149, 157, 165, 0.2) 0px 8px 24px'} borderRadius='2xl' >
                                <Image boxSize={['80px', '80px', '80px', '80px']} src={node}  />
                                <Text textAlign={'center'} mt='1' >NodeJs</Text>
                            </Box>
                            {/* *************************************************** */}
                            {/* <Box m={5} display="inline-block" w="auto" h="auto" p="12px" >
                                <Image boxShadow={'rgba(149, 157, 165, 0.2) 0px 8px 24px'} w='80px' boxSize={['125px', '125px', '130px', '135px']} src={chakra} borderRadius='2xl' />
                                <Text textAlign={'center'} mt={3}>Chakra UI</Text>
                            </Box>
                            <Box m={5} display="inline-block" w="auto" h="auto" p="12px" >
                                <Image boxShadow={'rgba(149, 157, 165, 0.2) 0px 8px 24px'} w='80px' boxSize={['125px', '125px', '130px', '135px']} src={git} borderRadius='2xl' />
                                <Text textAlign={'center'} mt={3}>Git</Text>
                            </Box>
                            <Box m={5} display="inline-block" w="auto" h="auto" p="12px" >
                                <Image boxShadow={'rgba(149, 157, 165, 0.2) 0px 8px 24px'} w='80px' boxSize={['125px', '125px', '130px', '135px']} src={js} borderRadius='2xl' />
                                <Text textAlign={'center'} mt={3}>JavaScript</Text>
                            </Box>
                            <Box m={5} display="inline-block" w="auto" h="auto" p="12px" >
                                <Image boxShadow={'rgba(149, 157, 165, 0.2) 0px 8px 24px'} w='80px' boxSize={['125px', '125px', '130px', '135px']} src={mongodb} borderRadius='2xl' />
                                <Text textAlign={'center'} mt={3}>Mongodb</Text>
                            </Box>
                            <Box m={5} display="inline-block" w="auto" h="auto" p="12px" mb='100px' >
                                <Image boxShadow={'rgba(149, 157, 165, 0.2) 0px 8px 24px'} w='80px' boxSize={['125px', '125px', '130px', '135px']} src={node} borderRadius='2xl' />
                                <Text textAlign={'center'} mt={3}>NodeJs</Text>
                            </Box> */}
                        </Box>
                </Box>
            </Box>
        </>
    )
}