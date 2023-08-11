export default {
    translation: {
        "ui.queue_btn": "冲冲冲",
        "ui.queue_front_btn": "插队冲冲冲",
        "ui.view_queue_btn": "查看队列",
        "ui.view_history_btn": "查看历史",
        "ui.save_btn": "保存",
        "ui.load_btn": "加载",
        "ui.refresh_btn": "刷新",
        "ui.clipspace_btn": "Clip空间",
        "ui.clear_btn": "清空",
        "ui.load_default_btn": "加载默认配置",
        "ui.close_btn": "关闭",
        "ui.queue_size": "队列数量: ",
        "ui.extra_options": "额外选项",
        "ui.extra.batch_count": "批次数量",

        "ui.settings.title": "设置",
        "ui.list.view.prefix": "查看",
        "ui.list.clear.prefix": "清除",
        "ui.list.queue": "队列",
        "ui.list.history": "历史",

        "ui.canvas_menu_add_node": "添加节点",
        "ui.canvas_menu_add_group": "添加组",

        "ui.node_panel.header.properties": "属性",
        "ui.node_panel.header.title": "标题",
        "ui.node_panel.header.mode": "模式",
        "ui.node_panel.header.color": "颜色",

        "node.title.KSampler": "采样器",
        "node.title.KSamplerAdvanced": "采样器 (高级)",
        // Loaders
        "node.title.CheckpointLoader": "加载模型 (指定配置)",
        "node.title.CheckpointLoaderSimple": "加载模型",
        "node.title.VAELoader": "VAE加载器",
        "node.title.LoraLoader": "LoRA加载器",
        "node.title.CLIPLoader": "CLIP加载器",
        "node.title.UNETLoader": "UNET加载器",
        "node.title.DualCLIPLoader": "双CLIP加载器",
        "node.title.ControlNetLoader": "ControlNet加载器",
        "node.title.DiffControlNetLoader": "DiffControlNet加载器",
        "node.title.StyleModelLoader": "样式模型加载器",
        "node.title.CLIPVisionLoader": "CLIP视觉加载器",
        "node.title.UpscaleModelLoader": "外扩模型加载器",
        // Conditioning
        "node.title.CLIPVisionEncode": "CLIP视觉编码",
        "node.title.StyleModelApply": "使用样式模型",
        "node.title.unCLIPConditioning": "反向CLIP调节",
        "node.title.CLIPTextEncode": "CLIP文本编码(提示词)",
        "node.title.CLIPSetLastLayer": "CLIP Set Last Layer",
        "node.title.ConditioningCombine": "(合并)调节",
        "node.title.ConditioningAverage": "(平均)调节",
        "node.title.ConditioningConcat": "(前后接续)调节",
        "node.title.ConditioningSetArea": "(选区域)调节",
        "node.title.ConditioningSetMask": "(用遮罩)调节",
        "node.title.ControlNetApply": "使用ControlNet",
        "node.title.ControlNetApplyAdvanced": "使用ControlNet(高级)",
        // Latent
        "node.title.VAEEncodeForInpaint": "VAE编码(局部重绘)",
        "node.title.SetLatentNoiseMask": "设置隐空间噪声遮罩",
        "node.title.VAEDecode": "VAE解码",
        "node.title.VAEEncode": "VAE编码",
        "node.title.LatentRotate": "Rotate Latent",
        "node.title.LatentFlip": "翻转隐空间",
        "node.title.LatentCrop": "裁切隐空间",
        "node.title.EmptyLatentImage": "空白隐空间图像",
        "node.title.LatentUpscale": "隐空间提升像素",
        "node.title.LatentUpscaleBy": "隐空间提升像素By",
        "node.title.LatentComposite": "复合隐空间",
        "node.title.LatentBlend": "混合隐空间",
        "node.title.LatentFromBatch": "批量隐空间",
        "node.title.RepeatLatentBatch": "重复的批量隐空间",
        // Image
        "node.title.SaveImage": "保存图像",
        "node.title.PreviewImage": "预览图像",
        "node.title.LoadImage": "加载图像",
        "node.title.LoadImageMask": "加载遮罩图",
        "node.title.ImageScale": "提升像素",
        "node.title.ImageScaleBy": "提升像素 By",
        "node.title.ImageUpscaleWithModel": "用模型提升像素",
        "node.title.ImageInvert": "反转图像",
        "node.title.ImagePadForOutpaint": "拓图用的空白图像",
        // _for_testing
        "node.title.VAEDecodeTiled": "VAE解码(平铺)",
        "node.title.VAEEncodeTiled": "VAE编码(平铺)",
        "node.title.unCLIPCheckpointLoader": "unCLIP模型加载器",
        "node.title.GLIGENLoader": "GLIGEN加载器",
        "node.title.GLIGENTextBoxApply": "GLIGEN文本框",
        // extras
        "node.title.Canny": "Canny",
        "node.title.CLIPTextEncodeSDXLRefiner": "CLIP文本编码SDXLRefiner",
        "node.title.CLIPTextEncodeSDXL": "CLIP文本编码SDXL",
        "node.title.HypernetworkLoader": "Hypernetwork加载器",
        "node.title.LatentCompositeMasked": "LatentCompositeMasked",
        "node.title.MaskToImage": "遮罩转图像",
        "node.title.ImageToMask": "图像转遮罩",
        "node.title.SolidMask": "实心遮罩",
        "node.title.InvertMask": "反转遮罩",
        "node.title.CropMask": "裁切遮罩",
        "node.title.MaskComposite": "复合遮罩",
        "node.title.FeatherMask": "羽毛遮罩",
        "node.title.ModelMergeSimple": "ModelMergeSimple",
        "node.title.ModelMergeBlocks": "ModelMergeBlocks",
        "node.title.CheckpointSave": "CheckpointSave",
        "node.title.CLIPMergeSimple": "CLIPMergeSimple",
        "node.title.ImageBlend": "混合",
        "node.title.ImageBlur": "虚化",
        "node.title.ImageQuantize": "量化",
        "node.title.ImageSharpen": "锐化",
        "node.title.RebatchLatents": "Rebatch Latents",
        "node.title.TomePatchModel": "TomePatchModel",
        "node.title.UpscaleModelLoader": "提升像素模型加载器",
        "node.title.ImageUpscaleWithModel": "用模型提升图像的像素",
        "node.title.DiffusersLoader": "Diffusers加载器",
        "node.title.LoadLatent": "加载隐空间",
        "node.title.SaveLatent": "保存隐空间",
        "node.title.ConditioningZeroOut": "调节ZeroOut",
        "node.title.ConditioningSetTimestepRange": "ConditioningSetTimestepRange",

        "node.input.text": "文本",
        "node.input.clip": "clip",
        "node.input.conditioning_1": "调节_1",
        "node.input.conditioning_2": "调节_2",
        "node.input.conditioning_to": "调节到",
        "node.input.conditioning_from": "调节自",
        "node.input.conditioning_to_strength": "调节到强度",
        "node.input.conditioning": "调节",
        "node.input.width": "宽度",
        "node.input.height": "高度",
        "node.input.x": "x",
        "node.input.y": "y",
        "node.input.strength": "强度",
        "node.input.mask": "遮罩",
        "node.input.set_cond_area": "set_cond_area",
        "node.input.start": "开始",
        "node.input.end": "结束",
        "node.input.samples": "样本",
        "node.input.vae": "vae",
        "node.input.pixels": "像素",
        "node.input.grow_mask_by": "grow_mask_by",
        "node.input.filename_prefix": "文件名前缀",
        "node.input.latent": "隐空间",
        "node.input.ckpt_name": "模型文件",
        "node.input.config_name": "配置文件",
        "node.input.model_path": "模型路径",
        "node.input.stop_at_clip_layer": "stop_at_clip_layer",
        "node.input.model": "模型",
        "node.input.lora_name": "lora名称",
        "node.input.strength_model": "strength_model",
        "node.input.strength_clip": "strength_clip",
        "node.input.vae_name": "vae_name",
        "node.input.control_net_name": "control_net_name",
        "node.input.control_net": "control_net",
        "node.input.image": "图像",
        "node.input.positive": "正向",
        "node.input.negative": "负向",
        "node.input.start_percent": "start_percent",
        "node.input.end_percent": "end_percent",
        "node.input.unet_name": "unet名字",
        "node.input.clip_name": "clip名字",
        "node.input.clip_name1": "clip名字1",
        "node.input.clip_name2": "clip名字2",
        "node.input.clip_vision": "clip_vision",
        "node.input.style_model_name": "style_model_name",
        "node.input.style_model": "style_model",
        "node.input.clip_vision_output": "clip_vision_output",
        "node.input.noise_augmentation": "噪声增强",
        "node.input.gligen_name": "gligen_name",
        "node.input.gligen_textbox_model": "gligen_textbox_model",
        "node.input.batch_size": "batch_size",
        "node.input.batch_index": "batch_index",
        "node.input.length": "length",
        "node.input.amount": "amount",
        "node.input.upscale_method": "upscale_method",
        "node.input.crop": "crop",
        "node.input.scale_by": "scale_by",
        "node.input.images": "images",
        "node.input.samples_to": "samples_to",
        "node.input.samples_from": "samples_from",
        "node.input.feather": "feather",
        "node.input.samples1": "samples1",
        "node.input.samples2": "samples2",
        "node.input.blend_factor": "blend_factor",
        "node.input.seed": "种子",
        "node.input.steps": "steps",
        "node.input.cfg": "cfg",
        "node.input.sampler_name": "采样器名称",
        "node.input.scheduler": "scheduler",
        "node.input.latent_image": "latent_image",
        "node.input.denoise": "denoise",
        "node.input.add_noise": "add_noise",
        "node.input.noise_seed": "noise_seed",
        "node.input.start_at_step": "start_at_step",
        "node.input.end_at_step": "end_at_step",
        "node.input.return_with_leftover_noise": "return_with_leftover_noise",
        "node.input.prompt": "提示词",
        "node.input.extra_pnginfo": "extra_pnginfo",
        "node.input.channel": "channel",
        "node.input.left": "左",
        "node.input.right": "右",
        "node.input.top": "top",
        "node.input.bottom": "bottom",
        "node.input.feathering": "feathering",
        "node.input.control_after_generate": "control_after_generate",
        "node.input.low_threshold": "低门槛",
        "node.input.high_threshold": "高门槛",
        "node.input.model_name": "模型名称",
        "node.input.ascore": "ascore",
        "node.input.crop_w": "crop_w",
        "node.input.crop_h": "crop_h",
        "node.input.target_width": "target_width",
        "node.input.target_height": "target_height",
        "node.input.text_g": "text_g",
        "node.input.text_l": "text_l",
        "node.input.ratio": "ratio",
        "node.input.model1": "模型1",
        "node.input.model2": "模型2",
        "node.input.clip1": "clip1",
        "node.input.clip2": "clip2",
        "node.input.input": "input",
        "node.input.middle": "middle",
        "node.input.out": "out",

        "node.output.CONDITIONING": "CONDITIONING",
        "node.output.IMAGE": "图像",
        "node.output.LATENT": "隐空间",
        "node.output.MODEL": "模型",
        "node.output.CLIP": "CLIP",
        "node.output.VAE": "VAE",
        "node.output.CLIP_VISION": "CLIP_VISION",
        "node.output.CONTROL_NET": "CONTROL_NET",
        "node.output.CLIP_VISION_OUTPUT": "CLIP_VISION_OUTPUT",
        "node.output.STYLE_MODEL": "STYLE_MODEL",
        "node.output.GLIGEN": "GLIGEN",
        "node.output.MASK": "遮罩",
        "node.output.UPSCALE_MODEL": "UPSCALE_MODEL",

        "category.conditioning": "可调参数",
        "category.loaders": "加载器",
        "category.latent": "潜在",
        "category.latent/inpaint": "潜在/修复",
        "category.latent/batch": "潜在/批量",
        "category.image": "图像",
        "category.mask": "遮罩",
        "category.image/upscaling": "图像/外扩",
        "category.sampling": "采样",
        "category._for_testing": "测试",
        "category.latent/transform": "潜在/转换",
        "category.advanced/loaders": "高级/加载器",
        "category.conditioning/style_model": "可调参数/风格模型",
        "category.conditioning/gligen": "可调参数/gligen",
        "category.advanced/loaders/deprecated": "高级/加载器/已弃用",
        "category.advanced/conditioning": "高级/可调参数",
        "category.image/postprocessing": "图像/后期处理",
        "category.advanced/model_merging": "高级/模型合并",
        "category.image/preprocessors": "图像/前期处理",
        "category.utils": "工具",

        "settings.Comfy.ConfirmClear": "清空工作流需要确认",
        "settings.Comfy.PromptFilename": "把工作流保存成文件",
        "settings.Comfy.PreviewFormat": "预览图格式和压缩尺寸, e.g. webp, jpeg, webp;50, etc.",
        "settings.Comfy.DisableSliders": "禁用滑动条",
        "settings.Comfy.DevMode": "启用开发模式",
        "settings.Comfy.ColorPalette": "主题",
        "settings.Comfy.EditAttention.Delta": "Ctrl+up/down precision",
        "settings.Comfy.InvertMenuScrolling": "反转滚动",
        "settings.Comfy.LinkRenderMode": "链接渲染模式",
        "settings.Comfy.NodeSuggestions.number": "Number of nodes suggestions",
        "settings.Comfy.SnapToGrid.GridSize": "单元格尺寸",
        "settings.Comfy.Logging.Enabled": "记录日志",
        "settings.Comfy.MenuPosition": "保存菜单位置",
        "settings.Comfy.ColorPalette.export": "导出",
        "settings.Comfy.ColorPalette.import": "导入",
        "settings.Comfy.ColorPalette.template": "模版",
        "settings.Comfy.ColorPalette.delete": "删除",
    },
};