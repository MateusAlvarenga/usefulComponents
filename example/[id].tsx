import { useRouter } from 'next/router'
import { withEditableRessource } from '../../components/hooks/withEditableRessource'
import Form from "@rjsf/core";
import { schema } from './schema';

export default () => {
    const router = useRouter()
    const { id } = router.query

    return withEditableRessource((props) => {

        console.info('props', props)
        const { car, onSaveCar } = props || {}

        return car ? (
            <>
                <Form
                    formData={car}
                    schema={schema({})}
                    onSubmit={onSaveCar}
                    liveValidate={true}
                    noHtml5Validate={true}
                />
            </>

        ) : <p>Loading...</p>
    }, id, '/cars/', 'car')({ Teste: "sasaf" })
}  