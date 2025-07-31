<script setup>
    import styled from '@vue-styled-components/core';
    import { SmallHeading, Heading1, Heading2, Heading3, Divider, Paragraph1 } from './styles/Typography.styled';
    
    defineProps({
        smallHeading: {
            type: String,
        },
        mainHeading: {
            type: String,
        },
        paragraph: {
            type: String,
        }
    });
    
</script>
<template>
    <div class="float-in min-h-[0vh] flex flex-col items-center justify-center pt-[2rem] px-[1.5rem]">
        <SmallHeading>
            {{ smallHeading }}
        </SmallHeading>

        <Heading1 class="pb-[10px] font-bold">
            {{ mainHeading }}
        </Heading1>

        <Paragraph1 class="pb-5 max-w-[700px] text-center">
            {{ paragraph }}
        </Paragraph1>

        <Divider/>

        <FlipCards />       
    </div>
    
</template>