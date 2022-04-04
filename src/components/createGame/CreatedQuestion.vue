<template >
    <multiple-choice v-if="question === 'mc'"/>
    <question-answer v-else-if="question === 'qa'"/>
</template>

<script>
import MultipleChoice from './MultipleChoice.vue'
import QuestionAnswer from './QuestionAnswer.vue'
export default {
    name: 'CreatedQuestion',
    components: {
        MultipleChoice,
        QuestionAnswer
    },
    props:['question'],
    setup(props) {
        var question = props.question;
    },
}
</script>