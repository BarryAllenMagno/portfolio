import {
    Box,
    Flex,
    Link,
    Button,
    useDisclosure,
    useColorModeValue,
    useColorMode,
    IconButton,
    Text,
    Stack,
    HStack
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon
} from '@chakra-ui/icons';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { ReactNode } from 'react';

const NavLink = ({ children, href }: { href: string, children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            color: useColorModeValue('#3b5998', '#3b5998'),
        }}
        href={href}>
        {children}
    </Link>
);

export default function Nav() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();

    const Links = ['Home', 'Skills', 'Projects', 'Experience', 'Contact'];
    const _scrollTop = () => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' })
    }

    return (
        <>
            <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} position='fixed' width={'100%'} zIndex='3' >
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'} mx={[0, 0, 45, 45]} >
                    <IconButton
                        size={'md'}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={'Open Menu'}
                        display={{ md: 'none' }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <Box onClick={_scrollTop} display={['none', 'none', 'flex', 'flex']} cursor={'pointer'} >
                        <Text textAlign={'center'} fontSize={'3xl'} >MAGNO.</Text>
                    </Box>
                    <HStack ml={['0', '0', '-20', '-20']} spacing={8} alignItems={'center'}>
                        <Box onClick={_scrollTop} display={['flex', 'flex', 'none', 'none']} cursor={'pointer'} >
                            <Text textAlign={'center'} fontSize={'3xl'} >MAGNO.</Text>
                        </Box>
                        <HStack
                            as={'nav'}
                            spacing={4}
                            display={{ base: 'none', md: 'flex' }}>
                            {Links.map((link) => (
                                <NavLink href={`#` + link} key={link}>{link}</NavLink>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={'center'}>
                        <Button onClick={toggleColorMode}>
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: 'none' }}>
                        <Stack as={'nav'} spacing={4}>
                            {Links.map((link) => (
                                <NavLink href={`#` + link} key={link}>{link}</NavLink>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    )
}