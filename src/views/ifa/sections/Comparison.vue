<template>
    <section>
        <div class="flex flex-col items-start px-7">
            <div class="table-section-container">
                <h1 class="title">INTEGRATION COMPARISON</h1>
    
                <div class="mb-8">
                    <h2 class="subtitle">CONTROL PANEL INTEGRATION COMPARISON</h2>
                    <p class="normal-text-bold">Release date: 2023-05-13</p>
                    <p class="normal-text-bold">IFA built 1.0.3.0</p>
                </div>
    
                <div class="flex mb-10">
                    <div class="text-group mr-20">
                        <p class="title-text">PANELS</p>
                        <p class="normal-text-bold">DMP</p>
                        <p class="normal-text-bold">DSC NEO</p>
                        <p class="normal-text-bold">DSC POWER PRO</p>
                    </div>
                    <div class="text-group">
                        <p class="title-text">SUPPORTED VERSIONS</p>
                        <p class="normal-text-bold">202, 213 and up</p>
                        <p class="normal-text-bold">v1.37</p>
                        <p class="normal-text-bold">v1.32</p>
                    </div>
                </div>
                <div class="flex max-lg:flex-col">
                    <div class="table-container bg-gray-1 border-gray-3 border w-full overflow-x-scroll min-[1300px]:max-w-[1200px] min-[1300px]:w-[80%] mb-12">
                        <div v-for="(row, index) in table_rows" :key="index" class="custom-table-row flex items-stretch">
                            <div :class="[row.title_col.class, {'full-column': row.content === 'full'}]" 
                            class="min-w-[455px] grow flex items-center font-consolas leading-[0.5] px-5 py-3 max-lg:text-[15px]">
                                {{ row.title_col.text }}
                            </div>
                            <template v-if="row.content === 'title'">
                                <div :class="row.col_1.class" class="flex items-center justify-center flex-shrink-0 font-regular font-consolas px-5 py-1 text-lg text-center w-[180px]">
                                    {{ row.col_1.text }}
                                </div>
                                <div :class="row.col_2.class" class="flex items-center justify-center flex-shrink-0 font-regular border-x border-gray-3 font-consolas px-5 py-1 text-lg text-center w-[180px]">
                                    {{ row.col_2.text }}
                                </div>
                                <div :class="row.col_3.class" class="flex items-center justify-center flex-shrink-0 font-regular font-consolas px-5 py-1 text-lg text-center w-[180px]">
                                    {{ row.col_3.text }}
                                </div>
                            </template>
                            <template v-if="row.content === 'dots'">
                                <div class="content-column flex-shrink-0 py-1 bg-yellow-1 border-x border-x-gray-3 leading-[0.5] w-[180px]" :class="row.content_1_class">
                                    •
                                </div>
                                <div class="content-column border-r border-gray-3 flex-shrink-0 py-1 bg-blue-1 leading-[0.5] w-[180px]" :class="row.content_2_class">
                                    •
                                </div>
                                <div class="content-column flex-shrink-0 py-1 bg-blue-1 leading-[0.5] w-[180px]" :class="row.content_2_class">
                                    •
                                </div>
                            </template>
                        </div>
                    </div>
                    <div class="flex items-start lg:ml-8 mb-12">
                        <a download href="tables/IFA Panel integration comparison B1.0.3.pdf"
                        class="learn-more-btn group flex flex-shrink-0 items-center justify-center uppercase font-bold font-consolas hover:text-default text-gray-8 bg-gray-3 hover:bg-yellow-3 active:bg-yellow-3 px-4 py-4 lg:py-1 w-full lg:w-max transition-all cursor-pointer">
                            <span class="flex break-normal text-lg font-medium">Download</span>
                            <downloadIcon width="22px" height="22px" class="ml-2" />
                        </a>
                    </div>
                </div>
    
                <p class="title-text mb-6">DIFFERENCES EXPLANATION</p>
                <p class="normal-text-regular">
                    REMOTE ADOPTION
                </p>
                <p class="normal-text-regular">
                    The panel can be adopted by IFA over the network without human intervention or disturbing panel operation. 
                </p>        
    
                <p class="normal-text-regular mt-6">
                    INITIALIZE COMMUNICATION
                </p>
                <p class="normal-text-regular">
                    IFA can initiate communications with the panel on demand to retrieve information or send commands.
                    For Neo panels, an open connection must be maintained for bidirectional communication. 
                </p>
    
                <p class="normal-text-regular mt-6">
                    RETRIEVE ZONES TYPE
                </p>
                <p class="normal-text-regular">
                    Zone type information is retrieved from the panel over the network.
                    For Neo panels zones type must be typed manually on IFA configuration page. 
                </p>
    
                <p class="normal-text-regular mt-6">
                    OFFLINE REGISTRATION
                </p>
                <p class="normal-text-regular">
                    Neo panel can be registered on IFA while offline because the panel registration ID is printed on the board.
                    For the DMP panel a communication need to be established to retrieve the registration ID.
                </p>
    
                <p class="normal-text-regular mt-6">
                    REQUIRE COMMUNICATION BOARD
                </p>
                <p class="normal-text-regular">
                    An additional Ethernet network board must be bought to enable TCP/IP communication. 
                </p>
    
                <p class="normal-text-regular mt-6">
                    REQUIRE MANUAL CONFIGURATION
                </p>
                <p class="normal-text-regular mb-20">
                    The panel must be configured on-site in order to enable communication with IFA Server. 
                </p>
            </div>
        </div>
        <div class="bg-gray-1 px-7 pt-6">
            <div class="table-section-container">
                <div class="my-8 mt-10">
                    <h2 class="subtitle">VMS INTEGRATION COMPARISON</h2>
                    <p class="normal-text-bold">Release date: 2023-05-13</p>
                    <p class="normal-text-bold">IFA built 1.0.3.0</p>
                </div>
    
                <div class="flex mb-10">
                    <div class="text-group mr-20">
                        <p class="title-text">VMS</p>
                        <p class="normal-text-bold">Milestone</p>
                        <p class="normal-text-bold">NX Witness</p>
                        <p class="normal-text-bold">Hanwha Wave</p>
                        <p class="normal-text-bold">DW Spectrum</p>
                        <p class="normal-text-bold">Dahua</p>
                        <p class="normal-text-bold">Hikvision</p>
                    </div>
                    <div class="text-group">
                        <p class="title-text">SUPPORTED VERSIONS</p>
                        <p class="normal-text-bold">2018R1 and up</p>
                        <p class="normal-text-bold">4.2 and up</p>
                        <p class="normal-text-bold">4.2 and up</p>
                        <p class="normal-text-bold">4.2 and up</p>
                        <p class="normal-text-bold">2.7 and up</p>
                        <p class="normal-text-bold">2.0 and up</p>
                    </div>
                </div>
                <div class="flex max-lg:flex-col">
                    <div class="table-container bg-gray-1 flex flex-col border-gray-3 border mb-20 w-full overflow-x-scroll">
                        <div v-for="(row, index) in table_rows_2" :key="index" class="custom-table-row flex items-stretch">
                            <div :class="[row.title_col.class, {'full-column': row.content === 'full'}]" 
                            class="grow-[2] min-w-[280px] flex items-center font-consolas leading-[0.5] px-5 py-3 max-lgtext-[15px]">
                                {{ row.title_col.text }}
                            </div>
                            <template v-if="row.content === 'title'">
                                <div v-for="(col, index) in [1,2,3,4,5,6]" :key="index" :class="row['col_'+col].class" 
                                class="flex-shrink-0 font-bold w-[150px] font-consolas px-5 py-1 text-lg text-center bg-blue-2 border-gray-3 border-r">
                                    {{ row[`col_${col}`].text }}
                                </div>
                            </template>
                            <template v-if="row.content === 'dots'">
                                <div v-for="(col, index) in [1,2,3,4,5,6]" :key="index" :class="row['col_'+col]"
                                class="bg-white flex-shrink-0 content-column w-[150px] py-1 border-l border-l-gray-3 leading-[0.5]">
                                    •
                                </div>
                            </template>
                        </div>
                    </div>
                    <div class="flex items-start lg:ml-8 mb-12">
                        <a href="files/buy/IFA Versions comparison.pdf" download
                        class="learn-more-btn group flex flex-shrink-0 items-center justify-center uppercase font-bold font-consolas hover:text-default text-gray-8 bg-gray-3 hover:bg-yellow-3 active:bg-yellow px-4 py-4 lg:py-1 w-full lg:w-max transition-all cursor-pointer">
                            <span class="flex break-normal text-lg font-medium">Download</span>
                            <download-icon width="22px" height="22px" class="ml-2" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="px-7 pt-6">
            <div class="table-section-container">
                <div class="my-8 mt-10">
                    <h2 class="subtitle">IFA VERSIONS COMPARISON</h2>
                    <p class="normal-text-bold">Release date: 2023-07-09</p>
                    <p class="normal-text-bold">IFA built 1.0.4.0</p>
                </div>
                
                <div class="flex max-lg:flex-col">
                    <div class="table-container bg-gray-1 border-gray-3 border w-full overflow-x-scroll min-[1300px]:max-w-[1200px] min-[1300px]:w-[70%] mb-20">
                        <div v-for="(row, index) in table_rows_3" :key="index" class="custom-table-row flex items-stretch">
                            <div :class="[row.title_col.class]" 
                            class="min-w-[455px] grow flex items-center font-consolas leading-[0.5] px-5 py-3 max-lg:text-[15px]">
                                {{ row.title_col.text }}
                            </div>
                            <template v-if="row.content === 'title'">
                                <div :class="row.col_1.class" 
                                class="flex items-center justify-center flex-shrink-0 font-regular font-consolas px-5 py-1 text-lg text-center w-[180px]">
                                    {{ row.col_1.text }}
                                </div>
                                <div :class="row.col_2.class" 
                                class="flex items-center justify-center flex-shrink-0 font-regular border-x border-gray-3 font-consolas px-5 py-1 text-lg text-center w-[180px]">
                                    {{ row.col_2.text }}
                                </div>
                            </template>
                            <template v-if="row.content === 'dots'">
                                <div class="content-column flex-shrink-0 py-1 bg-yellow-1 border-x border-x-gray-3 leading-[0.5] w-[180px]" :class="row.content_1_class">
                                    •
                                </div>
                                <div class="content-column flex-shrink-0 py-1 bg-blue-1 leading-[0.5] w-[180px]" :class="row.content_2_class">
                                    •
                                </div>
                            </template>
                        </div>
                    </div>
                    <div class="flex items-start lg:ml-8 mb-12">
                        <a download href="tables/IFA Panel integration comparison B1.0.3.pdf"
                        class="learn-more-btn group flex flex-shrink-0 items-center justify-center uppercase font-bold font-consolas hover:text-default text-gray-8 bg-gray-3 hover:bg-yellow-3 active:bg-yellow-3 px-4 py-4 lg:py-1 w-full lg:w-max transition-all cursor-pointer">
                            <span class="flex break-normal text-lg font-medium">Download</span>
                            <downloadIcon width="22px" height="22px" class="ml-2" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import downloadIcon from '../../../components/icons/download-icon.vue';
export default {
    name: "Comparison",
    components: { downloadIcon },
    data() {
        return {
            table_rows: [
                {   
                    content: 'title',
                    title_col: {
                        text: 'FEATURE',
                        class: 'font-bold bg-gray-4'
                    },
                    col_1: {
                        text: 'DMP XR SERIES',
                        class: 'font-bold bg-yellow-3'
                    },
                    col_2: {
                        text: 'DSC NEO',
                        class: 'font-bold bg-blue-3'
                    },
                    col_3: {
                        text: 'DSC POWER PRO',
                        class: 'font-bold bg-blue-3'
                    }
                },
                {   
                    content: 'full',
                    title_col: {
                        text: 'COMMON FEATURES',
                        class: 'bg-gray-1 w-full',
                    },
                },
                {   
                    content: 'dots',
                    title_col: {
                        text: 'Retrieve areas/partitions number and name',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-gray-8',
                    content_2_class: 'text-gray-8',
                },
                {   
                    content: 'dots',
                    title_col: {                    
                        text: 'Retrieve zones number and name',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-gray-8',
                    content_2_class: 'text-gray-8',
                },
                {   
                    content: 'dots',
                    title_col: {
                        text: 'Remote arming',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-gray-8',
                    content_2_class: 'text-gray-8',
                },
                {   
                    content: 'dots',
                    title_col: {
                        text: 'Remote disarming',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-gray-8',
                    content_2_class: 'text-gray-8',
                },
                {   
                    content: 'dots',
                    title_col: {
                        text: 'Remote zone bypass',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-gray-8',
                    content_2_class: 'text-gray-8',
                },
                {   
                    content: 'dots',
                    title_col: {
                        text: 'Remove zone reset',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-gray-8',
                    content_2_class: 'text-gray-8',
                },
                {   
                    content: 'dots',
                    title_col: {
                        text: 'Reset fire sensors',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-gray-8',
                    content_2_class: 'text-gray-8',
                },
                {   
                    content: 'dots',
                    title_col: {
                        text: 'Alarm silence',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-gray-8',
                    content_2_class: 'text-gray-8',
                },
                {   
                    content: 'dots',
                    title_col: {
                        text: 'Fire alarm silence',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-gray-8',
                    content_2_class: 'text-gray-8',
                },
                {   
                    content: 'dots',
                    title_col: {
                        text: 'Realtime events',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-gray-8',
                    content_2_class: 'text-gray-8',
                },
                {   
                    content: 'dots',
                    title_col: {
                        text: 'Remote datetime update',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-gray-8',
                    content_2_class: 'text-gray-8',
                },
                {   
                    content: 'full',
                    title_col: {
                        text: 'DIFFERENCES',
                        class: 'bg-gray-1 w-full',
                    },
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Remote adoption',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-gray-8',
                    content_2_class: 'text-blue-1',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Initialize communication',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-gray-8',
                    content_2_class: 'text-blue-1',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Retreive zones type',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-gray-8',
                    content_2_class: 'text-blue-1',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Offline registration',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-yellow-1',
                    content_2_class: 'text-gray-8',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Require communication board',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-yellow-1',
                    content_2_class: 'text-gray-8',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Requiere manual configuration',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-yellow-1',
                    content_2_class: 'text-gray-8',
                }
            ],
            table_rows_2: [
                {   
                    content: 'title',
                    title_col: {
                        text: 'FEATURE',
                        class: 'font-bold bg-gray-4'
                    },
                    col_1: {
                        text: 'MILESTONE',
                        class: 'font-bold bg-blue-2 border-gray-3 border-r'
                    },
                    col_2: {
                        text: 'NX WITNESS',
                        class: 'font-bold bg-blue-2 border-gray-3 border-r'
                    },
                    col_3: {
                        text: 'HANWHA WAVE',
                        class: 'font-bold bg-blue-2 border-gray-3 border-r'
                    },
                    col_4: {
                        text: 'SPECTRUM',
                        class: 'font-bold bg-blue-2 border-gray-3 border-r'
                    },
                    col_5: {
                        text: 'DAHUA',
                        class: 'font-bold bg-blue-2 border-gray-3 border-r'
                    },
                    col_6: {
                        text: 'HIKVISION',
                        class: 'font-bold bg-blue-2 border-gray-3 border-r'
                    }
                },
                {   
                    content: 'full',
                    title_col: {
                        text: 'COMMON FEATURES',
                        class: 'bg-gray-1 w-full',
                    },
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Live stream',
                        class: 'bg-white'
                    },
                    col_1: 'text-gray-8',
                    col_2: 'text-gray-8',
                    col_3: 'text-gray-8',
                    col_4: 'text-gray-8',
                    col_5: 'text-gray-8',
                    col_6: 'text-gray-8',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Video playback',
                        class: 'bg-white'
                    },
                    col_1: 'text-gray-8',
                    col_2: 'text-gray-8',
                    col_3: 'text-gray-8',
                    col_4: 'text-gray-8',
                    col_5: 'text-gray-8',
                    col_6: 'text-gray-8',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Retrieve cameras',
                        class: 'bg-white'
                    },
                    col_1: 'text-gray-8',
                    col_2: 'text-gray-8',
                    col_3: 'text-gray-8',
                    col_4: 'text-gray-8',
                    col_5: 'text-gray-8',
                    col_6: 'text-gray-8',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Retrieve server ID',
                        class: 'bg-white'
                    },
                    col_1: 'text-gray-8',
                    col_2: 'text-gray-8',
                    col_3: 'text-gray-8',
                    col_4: 'text-gray-8',
                    col_5: 'text-gray-8',
                    col_6: 'text-gray-8',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Get picture from camera',
                        class: 'bg-white'
                    },
                    col_1: 'text-gray-8',
                    col_2: 'text-gray-8',
                    col_3: 'text-gray-8',
                    col_4: 'text-gray-8',
                    col_5: 'text-gray-8',
                    col_6: 'text-gray-8',
                },                
                {   
                    content: 'full',
                    title_col: {
                        text: 'DIFFERENCES',
                        class: 'bg-gray-1 w-full',
                    },
                },                
                {
                    content: 'dots',
                    title_col: {
                        text: 'Download video',
                        class: 'bg-white'
                    },
                    col_1: 'text-gray-8',
                    col_2: 'text-gray-8',
                    col_3: 'text-gray-8',
                    col_4: 'text-gray-8',
                    col_5: 'text-gray-8',
                    col_6: 'text-white',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Obtain datetime',
                        class: 'bg-white'
                    },
                    col_1: 'text-gray-8',
                    col_2: 'text-gray-8',
                    col_3: 'text-gray-8',
                    col_4: 'text-gray-8',
                    col_5: 'text-gray-8',
                    col_6: 'text-white',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Retrieve users',
                        class: 'bg-white'
                    },
                    col_1: 'text-gray-8',
                    col_2: 'text-gray-8',
                    col_3: 'text-gray-8',
                    col_4: 'text-gray-8',
                    col_5: 'text-gray-8',
                    col_6: 'text-white',
                },                
                {
                    content: 'dots',
                    title_col: {
                        text: 'Retrieve licenses',
                        class: 'bg-white'
                    },
                    col_1: 'text-gray-8',
                    col_2: 'text-gray-8',
                    col_3: 'text-gray-8',
                    col_4: 'text-gray-8',
                    col_5: 'text-white',
                    col_6: 'text-white',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Retrieve videowalls',
                        class: 'bg-white'
                    },
                    col_1: 'text-gray-8',
                    col_2: 'text-gray-8',
                    col_3: 'text-gray-8',
                    col_4: 'text-gray-8',
                    col_5: 'text-white',
                    col_6: 'text-white',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Create event',
                        class: 'bg-white'
                    },
                    col_1: 'text-gray-8',
                    col_2: 'text-gray-8',
                    col_3: 'text-gray-8',
                    col_4: 'text-gray-8',
                    col_5: 'text-white',
                    col_6: 'text-white',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Create bookmark',
                        class: 'bg-white'
                    },
                    col_1: 'text-gray-8',
                    col_2: 'text-gray-8',
                    col_3: 'text-gray-8',
                    col_4: 'text-gray-8',
                    col_5: 'text-white',
                    col_6: 'text-white',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Manual configuration',
                        class: 'bg-white'
                    },
                    col_1: 'text-gray-8',
                    col_2: 'text-gray-8',
                    col_3: 'text-gray-8',
                    col_4: 'text-gray-8',
                    col_5: 'text-white',
                    col_6: 'text-white',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Camera status',
                        class: 'bg-white'
                    },
                    col_1: 'text-gray-8',
                    col_2: 'text-gray-8',
                    col_3: 'text-gray-8',
                    col_4: 'text-gray-8',
                    col_5: 'text-white',
                    col_6: 'text-white',
                },                
                {
                    content: 'dots',
                    title_col: {
                        text: 'Camera model',
                        class: 'bg-white'
                    },
                    col_1: 'text-white',
                    col_2: 'text-gray-8',
                    col_3: 'text-gray-8',
                    col_4: 'text-gray-8',
                    col_5: 'text-white',
                    col_6: 'text-white',
                },
            ],
            table_rows_3: [
                {   
                    content: 'title',
                    title_col: {
                        text: 'FEATURE',
                        class: 'font-bold bg-gray-4'
                    },
                    col_1: {
                        text: 'FORWARD',
                        class: 'font-bold bg-yellow-3'
                    },
                    col_2: {
                        text: 'STANDARD',
                        class: 'font-bold bg-blue-3'
                    },
                    col_3: {
                        text: 'DSC POWER PRO',
                        class: 'font-bold bg-blue-3'
                    }
                },
                {   
                    content: 'dots',
                    title_col: {
                        text: 'Listener network message monitor.',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-gray-8',
                    content_2_class: 'text-gray-8',
                },
                {   
                    content: 'dots',
                    title_col: {                    
                        text: 'System dashboard.',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-gray-8',
                    content_2_class: 'text-gray-8',
                },
                {   
                    content: 'dots',
                    title_col: {
                        text: 'Visor dashboard',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-yellow-1',
                    content_2_class: 'text-gray-8',
                },
                {   
                    content: 'dots',
                    title_col: {
                        text: 'Audio feedback mute control',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-yellow-1',
                    content_2_class: 'text-gray-8',
                },
                {   
                    content: 'dots',
                    title_col: {
                        text: 'Multiuser',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-yellow-1',
                    content_2_class: 'text-gray-8',
                },
                {   
                    content: 'dots',
                    title_col: {
                        text: 'Connection & session manager',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-yellow-1',
                    content_2_class: 'text-gray-8',
                },
                {   
                    content: 'dots',
                    title_col: {
                        text: 'Recipients manager',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-gray-8',
                    content_2_class: 'text-gray-8',
                },
                {   
                    content: 'dots',
                    title_col: {
                        text: 'Recipients reports',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-yellow-1',
                    content_2_class: 'text-gray-8',
                },
                {   
                    content: 'dots',
                    title_col: {
                        text: 'Panels manager',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-gray-8',
                    content_2_class: 'text-gray-8',
                },
                {   
                    content: 'dots',
                    title_col: {
                        text: 'Panels reports',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-yellow-1',
                    content_2_class: 'text-gray-8',
                },
                {   
                    content: 'dots',
                    title_col: {
                        text: 'Panel zone status live monitor',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-yellow-1',
                    content_2_class: 'text-gray-8',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Panel remote. Arm, disarm, more.',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-yellow-1',
                    content_2_class: 'text-gray-8',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Push events and bookmarks to recipients',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-gray-8',
                    content_2_class: 'text-gray-8',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Realtime events (RTE)',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-yellow-1',
                    content_2_class: 'text-gray-8',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Visual arming assistant',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-yellow-1',
                    content_2_class: 'text-gray-8',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Listener logs',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-gray-8',
                    content_2_class: 'text-gray-8',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Dispacher logs',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-gray-8',
                    content_2_class: 'text-gray-8',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'System logs',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-gray-8',
                    content_2_class: 'text-gray-8',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Audit log',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-gray-8',
                    content_2_class: 'text-gray-8',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Login log',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-gray-8',
                    content_2_class: 'text-gray-8',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Notification manager',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-gray-8',
                    content_2_class: 'text-gray-8',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'E-Mail notifications',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-yellow-1',
                    content_2_class: 'text-gray-8',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Telegram notifications',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-yellow-1',
                    content_2_class: 'text-gray-8',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Alarms research',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-yellow-1',
                    content_2_class: 'text-gray-8',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Incidents research',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-yellow-1',
                    content_2_class: 'text-gray-8',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Live and recorded video from related alarms',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-yellow-1',
                    content_2_class: 'text-gray-8',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Alarms history',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-yellow-1',
                    content_2_class: 'text-gray-8',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Auto video backup from related alarms',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-yellow-1',
                    content_2_class: 'text-gray-8',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Manual video download',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-yellow-1',
                    content_2_class: 'text-gray-8',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Optimized to display alarms on 4k displays',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-yellow-1',
                    content_2_class: 'text-gray-8',
                },
                {
                    content: 'dots',
                    title_col: {
                        text: 'Extensive configuration options',
                        class: 'bg-white'
                    },
                    content_1_class: 'text-yellow-1',
                    content_2_class: 'text-gray-8',
                }
            ],
        }
    },
}
</script>
<style scoped>
    .title {
        @apply font-consolas font-bold text-default text-[24px] lg:text-4xl mb-4 uppercase;
    }
    .subtitle {
        @apply font-consolas font-bold text-default text-base lg:text-2xl uppercase;
    }
    p.normal-text-bold {
        @apply font-consolas text-default leading-[20px] text-[15px] lg:text-[1.125rem];
    }
    p.normal-text-regular {
        @apply font-consolas text-default leading-[20px] text-[15px] lg:text-[1.125rem];
    }
    .custom-table-row:not(:last-child) {
        @apply border-b border-gray-3;
    }
    p.title-text {
        @apply font-consolas font-extrabold text-default leading-[20px] text-base lg:text-[1.125rem];
    }
    .content-column {
        @apply font-consolas flex justify-center px-5 text-[32px] text-center;
    }

    .learn-more-btn:hover ::v-deep(svg path.arrow) {
        transform: translateY(7px);
    }
    .learn-more-btn ::v-deep(svg path.arrow) {
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
    }
    .table-section-container {
        @apply w-full min-[1100px]:pl-[12.5rem] min-[1100px]:pr-[5rem];
    }
</style>