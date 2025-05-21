from rest_framework import serializers


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ['file','post']



class PostSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True, read_only=True)

    class Meta:
        fields = ['title','description','images']
