import { Text } from '@chakra-ui/layout'
import Layout from './components/layout'
import CTA from './practice/2col-cta'

const Practice = () => {
    return (
        <Layout 
        heroHeading={'PRACTICE runs'}
        heroIntro='Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
                fugiat aliqua.' >
            <Text>To be tried</Text>
            <CTA SectionTitle={'Ready to start that project?'}
    SectionTag={'Book a quote now!'} 
    SectionText={'Speak to our friendly and highly courtious sales team and get closer to your dream space'}
                ButtonLabel={'Book A Quote'} ButtonLink='/contact' />
      </Layout>
    )
  }


export default Practice
