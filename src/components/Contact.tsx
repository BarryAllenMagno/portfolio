import { Box, Text, Button, Link, Divider, Center } from "@chakra-ui/react";
import { FaFacebook, FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

export default function Contact() {
    const _scrollTop = () => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    }

    return (
        <>
            <Box id="Contact" mt={'50px'} w='100%' pb={'70px'}>
                <Box textAlign={'center'}>

                    <Text fontSize={'2xl'} mb='15px' >Get in touch!</Text>
                    <Center>
                        <Divider
                            width={'70px'}
                            display='flex'
                            border='1px solid'
                            mb={'45px'}
                        />
                    </Center>
                    <Box textAlign="center">
                        <Link href="https://www.facebook.com/skirmpy" target={'_blank'} >
                            <Button m={3} >
                                <FaFacebook fontSize="30px" />
                            </Button>
                        </Link>
                        <Link href="https://github.com/BarryAllenMagno" target={'_blank'} >
                            <Button m={3}>
                                <FaGithub fontSize="30px" />
                            </Button>
                        </Link>
                        <Link href="https://www.linkedin.com/in/barry-allen-magno-bab8b7163/" target={'_blank'} >
                            <Button m={3}>
                                <FaLinkedin fontSize="30px" />
                            </Button>
                        </Link>
                    </Box>
                    <Text color={'gray'} fontWeight={'thin'} mt='30' >Copyright © 2023. Created by Barry Allen Magno</Text>
                    <Button mt='30' onClick={_scrollTop}>
                        <FaArrowUp />
                    </Button>

                </Box>
            </Box>
        </>
    )
}