import Head from 'next/head'
import { CodeDay } from '@codeday/topo/Atom/Logo'
import Box from '@codeday/topo/Atom/Box'
import Text from '@codeday/topo/Atom/Text'
import Button from '@codeday/topo/Atom/Button'
import Main from '@codeday/topo/Organism/Main'
import Header, { SiteLogo, Menu } from '@codeday/topo/Organism/Header'

export default ({ children }: any): JSX.Element => (
    <Box>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>
        <Box position="relative">
            <Header underscore position="relative">
                <SiteLogo>
                    <CodeDay withText/>
                    <Text as="span" d="inline" letterSpacing="-2px" fontFamily="heading" position="relative" top={1} ml={1} bold>
                        Achievements
                    </Text>
                </SiteLogo>
                <Menu>
                    <Button as="a" href="/" variant="ghost">Home</Button>
                    <Button as="a" href="/players" variant="ghost">Players</Button>
                    <Button as="a" href="/achievements" variant="ghost">Achievements</Button>
                    <Button as="a" href="/leaderboard" variant="ghost">Leaderboard</Button>
                    <Button as="a" href="/dashboard" variant="ghost">Dashboard</Button>
                </Menu>
            </Header>
            <Main>
                {children}
            </Main>
        </Box>
    </Box>
)