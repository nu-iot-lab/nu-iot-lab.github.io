const NewsData = [
  {
    image:
      "https://www.researchgate.net/profile/Dimitrios-Zorbas/publication/363304500/figure/fig1/AS:11431281085102691@1663601535315/The-LoRaWAN-architecture_Q640.jpg",
    category: "Publications",
    title: "Improving LoRaWAN downlink performance in the EU868 spectrum",
    date: "Sep 2022",
    author: {
      name: "Dimitrios Zorbas",
      avatar:
        "https://lh3.googleusercontent.com/a-/ACNPEu_qmK7IidCh8U8TK0Sq9yUBojUIJYLkgpEx_R_5=s48-p",
    },
    description:
      "LoRaWAN is one of the most widely used Internet of Things protocols. It is developed driven by the easiness of the deployment and the support of any type of application. However, LoRaWAN has been made mostly for uplink transmissions rather than downlink traffic. As it has been shown by many studies in the literature, it suffers from very poor performance even with moderate downlink traffic. This is mainly due to the radio duty cycle restrictions applied on gateways but also due to the half-duplex nature of LoRa transceivers. To mitigate the problem of the reduced downlink performance, this paper proposes different channel, band, and downlink window schemes taking into account the recently announced Band 47b in the EU868 spectrum which adds four extra downlink channels with a total radio duty cycle of 10%. The main issue that is tackled is how the additional downlink time can be used effectively in the new schemes. The advantages and disadvantages of each scheme are discussed and ranked based on the easiness of their integration into the native LoRaWAN and the number of modifications they require. Extensive simulation results are presented and are compared to the baseline. The results reveal that schemes which require more changes to the protocol exhibit higher performance gains. More specifically, if a 10% duty cycle channel is applied in the first receive window, a higher than 200% performance gain in terms of packet delivery ratio and energy consumption can be achieved.",
    link: "https://www.researchgate.net/publication/363304500",
  },
  {
    image:
      "https://www.researchgate.net/profile/Dimitrios-Zorbas/publication/357933682/figure/fig1/AS:1113990386200576@1642607413489/An-example-of-the-ActLoRa-frame-structure-for-two-synchronized-nodes-namely-one_Q640.jpg",
    category: "Publications",
    title: "ActLoRa: Supporting Actuators in LoRaWAN",
    date: "May 2022",
    author: {
      name: "Dimitrios Zorbas",
      avatar:
        "https://lh3.googleusercontent.com/a-/ACNPEu_qmK7IidCh8U8TK0Sq9yUBojUIJYLkgpEx_R_5=s48-p",
    },
    description:
      "LoRaWAN is one of the most widely used Internet of Things protocols. It is developed driven by the easiness of the deployment and the support of any type of application. However, LoRaWAN has been made mostly for uplink transmissions rather than downlink traffic. As it has been shown by many studies in the literature, it suffers from very poor performance even with moderate downlink traffic. This is mainly due to the radio duty cycle restrictions applied on gateways but also due to the half-duplex nature of LoRa transceivers. To mitigate the problem of the reduced downlink performance, this paper proposes different channel, band, and downlink window schemes taking into account the recently announced Band 47b in the EU868 spectrum which adds four extra downlink channels with a total radio duty cycle of 10%. The main issue that is tackled is how the additional downlink time can be used effectively in the new schemes. The advantages and disadvantages of each scheme are discussed and ranked based on the easiness of their integration into the native LoRaWAN and the number of modifications they require. Extensive simulation results are presented and are compared to the baseline. The results reveal that schemes which require more changes to the protocol exhibit higher performance gains. More specifically, if a 10% duty cycle channel is applied in the first receive window, a higher than 200% performance gain in terms of packet delivery ratio and energy consumption can be achieved.",
    link: "https://www.researchgate.net/publication/363304500",
  },
  {
    image:
      "https://www.researchgate.net/profile/Husnain-Sherazi/publication/359956462/figure/fig2/AS:1147977234153480@1650710509778/The-impact-of-distance-on-the-received-power-in-RF-power-harvesting_Q640.jpg",
    category: "Publications",
    title:
      "A Comprehensive Survey on RF Energy Harvesting: Applications and Performance Determinants",
    date: "Apr 2022",
    author: {
      name: "Dimitrios Zorbas",
      avatar:
        "https://lh3.googleusercontent.com/a-/ACNPEu_qmK7IidCh8U8TK0Sq9yUBojUIJYLkgpEx_R_5=s48-p",
    },
    description:
      "There has been an explosion in research focused on Internet of Things (IoT) devices in recent years, with a broad range of use cases in different domains ranging from industrial automation to business analytics. Being battery-powered, these small devices are expected to last for extended periods (i.e., in some instances up to tens of years) to ensure network longevity and data streams with the required temporal and spatial granularity. It becomes even more critical when IoT devices are installed within a harsh environment where battery replacement/charging is both costly and labour intensive. Recent developments in the energy harvesting paradigm have significantly contributed towards mitigating this critical energy issue by incorporating the renewable energy potentially available within any environment in which a sensor network is deployed. Radio Frequency (RF) energy harvesting is one of the promising approaches being investigated in the research community to address this challenge, conducted by harvesting energy from the incident radio waves from both ambient and dedicated radio sources. A limited number of studies are available covering the state of the art related to specific research topics in this space, but there is a gap in the consolidation of domain knowledge associated with the factors influencing the performance of RF power harvesting systems. Moreover, a number of topics and research challenges affecting the performance of RF harvesting systems are still unreported, which deserve special attention. To this end, this article starts by providing an overview of the different application domains of RF power harvesting outlining their performance requirements and summarizing the RF power harvesting techniques with their associated power densities. It then comprehensively surveys the available literature on the horizons that affect the performance of RF energy harvesting, taking into account the evaluation metrics, power propagation models, rectenna architectures, and MAC protocols for RF energy harvesting. Finally, it summarizes the available literature associated with RF powered networks and highlights the limitations, challenges, and future research directions by synthesizing the research efforts in the field of RF energy harvesting to progress research in this area.",
    link: "https://www.researchgate.net/publication/363304500",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1WIZ61gHn5uKtyKRqBGiLf8_khmJSSSHsTl0rNKQu7HLii0cr7WpQ46vD8B4WsFWSa9A&usqp=CAU",
    category: "Publications",
    title: "Time-slotted LoRa MAC with variable payload support",
    date: "2021",
    author: {
      name: "Dimitrios Zorbas",
      avatar:
        "https://lh3.googleusercontent.com/a-/ACNPEu_qmK7IidCh8U8TK0Sq9yUBojUIJYLkgpEx_R_5=s48-p",
    },
    description:
      "Despite its various advantages, LoRaWAN employs an Aloha-based MAC, which in terms of performance cannot guarantee high packet delivery ratio and low latency. To overcome this issue, we propose a more efficient time-slotted scheme, called TS-VP-LoRa. The proposed scheme has proven to achieve low latency with high packet delivery ratios, significantly minimize collisions and maintain a relatively low energy consumption despite the scaling of the LoRa network. TS-VP-LoRa has proven to be more efficient, reliable and energy conservative in contrast to FCA-LoRa, legacy LoRaWAN and Slotted-Aloha LoRaWAN schemes for supporting variable payload. Taking under consideration, the randomness factor in simulation scenarios, the evaluation of TS-VP-LoRa is favourable in terms of throughput and energy consumption, enabling a greater number of produced packets to be received successfully by the Network Server, maintaining high chan- nel utilization despite the number of LoRa end-devices and eliminating collisions",
    link: "https://www.sciencedirect.com/science/article/pii/S0140366422002444",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1WIZ61gHn5uKtyKRqBGiLf8_khmJSSSHsTl0rNKQu7HLii0cr7WpQ46vD8B4WsFWSa9A&usqp=CAU",
    category: "Publications",
    title: "Performance Determinants in LoRa Networks: A Literature Review",
    date: "2021",
    author: {
      name: "Dimitrios Zorbas",
      avatar:
        "https://lh3.googleusercontent.com/a-/ACNPEu_qmK7IidCh8U8TK0Sq9yUBojUIJYLkgpEx_R_5=s48-p",
    },
    description:
      "In this paper, a study on the factors that affect the LoRa networks’ capacity and performance was attempted. A literature study took place that included several works that outline the performance and the behavior of these networks along with attempts of improving and even substituting critical functionalities. A categorization of the literature was presented. Moreover, the complexity of the subject and the several factors that influence it was acknowledged. During this process, several characteristics stand out when the questions of performance and efficiency come up. Physical phenomena, transmission settings, deployment features, application requirements, and the selected MAC method seem to affect in one way or another the performance of these networks. As it is shown, these underlined characteristics of LoRa networks have a direct or an indirect impact on the number of sufficiently supported EDs. These characteristics coined as LoRa capacity shaping factors are analyzed and categorized.",
    link: "https://ieeexplore.ieee.org/document/9463416",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1WIZ61gHn5uKtyKRqBGiLf8_khmJSSSHsTl0rNKQu7HLii0cr7WpQ46vD8B4WsFWSa9A&usqp=CAU",
    category: "Publications",
    title: "Optimal Data Collection Time in LoRa Networks—A Time-Slotted Approach",
    date: "2021",
    author: {
      name: "Dimitrios Zorbas",
      avatar:
        "https://lh3.googleusercontent.com/a-/ACNPEu_qmK7IidCh8U8TK0Sq9yUBojUIJYLkgpEx_R_5=s48-p",
    },
    description:
      "As the Aloha-like way of accessing the medium is the main limiting factor regarding the performance of LoRaWAN networks, many efforts have been made towards alternative directions. Thus, to overcome MAC-related problems that rule LoRa networks several synchronized time-slotted works have been proposed. The number of collisions that seem to appear very easily is one of the identified issues. These collisions bring the network near to non-usability when the medium faces high network loads. The latter almost certainly has the side effect of increased energy consumption. The uncontrolled way of accessing the medium and of setting up of the transmission parameters also leads to transmission success unfairness among the EDs of a LoRa network. All these have the overall effect of limiting the QoS levels in LoRa cells. Hence, time scheduling schemes have become a focal point of research in LoRa networks mainly for applications that require very high reliability for a given number of nodes.",
    link: "https://www.mdpi.com/1424-8220/21/4/1193",
  },
];

export default NewsData;
