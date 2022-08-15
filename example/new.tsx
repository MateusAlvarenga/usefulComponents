import { useRouter } from 'next/router'
import { withCreatorRessource } from '../../components/hooks/withCreatorRessource'
import Form from "@rjsf/core";
import { schema } from './schema';
import Ressource from '../../components/hooks/ressource';

export default () => {

    return withCreatorRessource((props) => {

        console.info('props', props)
        const { car, onSaveCar } = props || {}

        return (
            <>
                <Form
                    formData={car}
                    schema={schema({})}
                    onSubmit={onSaveCar}

                />
                <Ressource obj={car} />
            </>

        )
    }, '/cars/', 'car')({})
}  